import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// SIGNUP HANDLER
async function handleUserSignup(req, res) {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Set cookie upon successful signup
    res.cookie("userId", newUser._id.toString(), {
      httpOnly: true,
      // Secure: true, // Uncomment this if you're serving your site over HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "An error occurred during signup." });
  }
}

//LOGIN HANDLER

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.cookie("userId", user._id.toString(), {
        httpOnly: true,

        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" }); //sdsd
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An error occurred during login." });
  }
}

export { handleUserSignup, handleUserLogin };
