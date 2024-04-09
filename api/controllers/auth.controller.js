import User from "../models/users.model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  if (
    !userName ||
    !email ||
    !password ||
    userName == "" ||
    email == "" ||
    password == ""
  ) {
    return next(errorHandler(400, "All field are required"));
  }

  //if user existed
  const user = await User.findOne({ email });

  if (!user) {
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    return res.json({ message: "Login success" });
  } else {
    return next(errorHandler(400, "User already existed"));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password || email == "" || password == "") {
      return next(errorHandler(400, "All field are required"));
    }

    //if user existed
    const user = await User.findOne({ email });

    if (user) {
      const validatePassword = bcryptjs.compareSync(password, user.password);

      if (!validatePassword) return next(errorHandler(400, "Password wrong"));

      const token = jwt.sign(
        {
          id: user._id,
          password: user.password,
        },
        process.env.PassSecret,
        { expiresIn: "1d" }
      );

      const { password: pass, ...rest } = user._doc;

      res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
    } else {
      return next(errorHandler(400, "User do not existed"));
    }
  } catch (error) {
    next(error);
  }
};


export const logout = async (req, res,next) => {
  try {
    return res.clearCookie('token').json({mesage: 'Logout success'})
  } catch (error) {
    next(error)
    
  }
}
