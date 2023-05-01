import UserModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';


// register new users
export const registerUser = async (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    const salt = await bcrypt.genSalt(10);
    let pass = password.toString();
    const hashedPass = await bcrypt.hash(pass, parseInt(salt));

    const newUser = new UserModel({ email, password: hashedPass, firstname, lastname });

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}