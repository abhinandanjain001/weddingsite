const bcrypt = require("bcryptjs");
const collection = require("../maincel/src/config");

module.exports = async function signupHandler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res.status(400).send("username and password are required");
    }

    const existinguser = await collection.findOne({ name: username });
    if (existinguser) {
      return res.status(409).send("user alerady exist. please choose diffrent username");
    }

    const sailRounds = 10;
    const hashedpassword = await bcrypt.hash(password, sailRounds);

    await collection.insertMany({
      name: username,
      password: hashedpassword,
    });

    return res.redirect(302, "/");
  } catch (error) {
    console.error("Signup failed:", error);
    return res.status(500).send("signup failed");
  }
};
