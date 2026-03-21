const admin = require("firebase-admin");

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : undefined;

if (!admin.apps.length) {
    if (projectId && clientEmail && privateKey) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
    } else {
        throw new Error(
            "Firebase Admin credentials are missing. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in .env"
        );
    }
}

const db = admin.firestore();
const usersCollection = db.collection("signup");

console.log("Firebase Firestore connected successfully");

const collection = {
    async findOne(query) {
        if (!query || !query.name) return null;

        const snapshot = await usersCollection
            .where("name", "==", query.name)
            .limit(1)
            .get();

        if (snapshot.empty) return null;

        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() };
    },

    async insertMany(data) {
        const docRef = await usersCollection.add(data);
        return [{ id: docRef.id, ...data }];
    },
};

module.exports = collection;