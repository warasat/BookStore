// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs";

// //SignUp method
// export const  signUp = async (req,res)=>{
// try {
  
//     const {fullname,email,password} = req.body;
//     const user =  await User.findOne({email})
//     if(user){
//       return res.status(400).json({message:"Email already exists"})
//   }
//   const hashpassword =  await bcryptjs.hash(password,10)
//   const createdUser = new User({
//     fullname: fullname,
//     email: email,
//     password: hashpassword,
//   })
//   await createdUser.save();
//   res.status(201).json({message:"User created successfully",user:{
//     _id: createdUser._id,
//     fullname: createdUser.fullname,
//     email: createdUser.email,

//   }})
  
  
// } catch (error) {
//   console.log("Error:" + error.message)
//   res.status(500).json({message:"Internal server error"})
  
// }};

// //Login method
// export const login = async (req,res) =>{
// try {
//   const {email,password} = req.body;
//   const user = await User.findOne({email})
//   const isMatch =  await bcryptjs.compare(password,user.password)
//   if(!user || !isMatch){
//     return res.status(400).json({message:"Invalid email or password"})
//   }else{
//     res.status(200).json({message: "Login Successful", user:{
//       _id: user._id,
//       fullname: user.fullname,
//       email: user.email
//     }})
//   }
// } catch (error) {
//   console.log("Error:" + error.message)
//   res.status(500).json({message:"Internal server error"})
  
// }
// };

import User from "../model/user.model.js";
 import bcryptjs from "bcryptjs";


export const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
console.log(req.body)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      fullname,
      email,
      password: hashPassword, // Hashing the password before storing it
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Email:", email, "Password:", password); // Log input

    // Fetch the user from the database
    const user = await User.findOne({ email });
    console.log("User fetched from database:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the password with the hashed password
    const isMatch = await bcryptjs.compare(password, user.password);
    console.log("Password comparison result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // If both checks pass, return success
    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error occurred during login:", error.message);
    console.log("Full error object:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
