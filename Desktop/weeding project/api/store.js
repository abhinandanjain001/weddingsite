const admin = require("firebase-admin");
const fs = require("fs/promises");
const path = require("path");

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  : undefined;

if (!admin.apps.length && projectId && clientEmail && privateKey) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

const localStorePath = path.join(__dirname, "../data/signup-users.json");

async function readLocalUsers() {
  try {
    const raw = await fs.readFile(localStorePath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writeLocalUsers(users) {
  await fs.mkdir(path.dirname(localStorePath), { recursive: true });
  await fs.writeFile(localStorePath, JSON.stringify(users, null, 2));
}

const usersCollection = admin.apps.length ? admin.firestore().collection("signup") : null;

const collection = {
  async findOne(query) {
    if (!query || !query.name) return null;

    if (usersCollection) {
      try {
        const snapshot = await usersCollection.where("name", "==", query.name).limit(1).get();
        if (snapshot.empty) return null;
        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() };
      } catch (error) {
        // Fall back to local storage if Firestore is unavailable.
      }
    }

    const users = await readLocalUsers();
    return users.find((user) => user.name === query.name) || null;
  },

  async insertMany(data) {
    if (usersCollection) {
      try {
        const docRef = await usersCollection.add(data);
        return [{ id: docRef.id, ...data }];
      } catch (error) {
        // Fall back to local storage if Firestore is unavailable.
      }
    }

    const users = await readLocalUsers();
    const localUser = {
      id: `local-${Date.now()}`,
      ...data,
    };
    users.push(localUser);
    await writeLocalUsers(users);
    return [localUser];
  },
};

module.exports = collection;