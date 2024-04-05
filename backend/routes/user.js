import express from 'express';
import zod from 'zod';
import { User } from '../db.js';
import { Account } from '../db.js';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';
import { authMiddleware } from '../middleware.js';
const router = express.Router();

//signup schema
const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6),
})
//signup route

router.post("/signup", async (req, res) => {
    const { success } = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({username: req.body.username});

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })

    const userId = user._id;

    /// ----- Create new account ------
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({userId},JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
});

//signin schema
const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

//signin route
router.post("/signin", async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    
    const user = await User.findOne({
        username: req.body.username, 
        password: req.body.password
    });

    if(user){
        const token = jwt.sign({userId: user._id},JWT_SECRET);
        res.json({
            message: "User logged in successfully",
            token: token,
            firstName: user.firstName
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
   
})

//update schema
const updateSchema = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

//update router
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({_id: req.userId},req.body);

    res.json({
        message: "Updated successfully"
    })

})

//bulk router
router.get("/bulk", async (req, res) =>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

export default router;