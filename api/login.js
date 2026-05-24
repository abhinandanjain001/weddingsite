const bcrypt = require("bcrypt");
const collection = require("../maincel/src/config");

module.exports = async function loginHandler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const { username, password } = req.body || {};
    const check = await collection.findOne({ name: username });

    if (!check) {
      return res.status(401).send("user name cannot found");
    }

    const ispasswordMatch = await bcrypt.compare(password, check.password);
    if (ispasswordMatch) {
      return res.redirect(302, "/loading/index0.html");
    }

    return res.status(401).send("wrong password");
  } catch (error) {
    console.error("Login failed:", error);
    return res.status(500).send("wrong details");
  }
};
