const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require('cors');
const fs = require("fs");
const path = require("path")
const morgan = require('morgan');
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
require('dotenv').config()

// const { v4: uuidv4 } = require('uuid');
const app = express();

const ImageModel = require("./models");
const User = require("./users");
const OTP = require("./OTP");
const port = 5000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

const acessLogStream = fs.createWriteStream(path.join(__dirname, "acess.log"), { flags: 'a' });
app.use(morgan("combined", { stream: acessLogStream }));

mongoose
    .connect(
        process.env.mongo,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("connected successfully"))
    .catch((err) => console.log("it has an error", err));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post("/", upload.single("testImage"), async (req, res) => {
    // console.log(req.file.filename)
    const ritvik = await ImageModel.findOne({ name: req.body.name })
    if (ritvik) {
        ImageModel.findOneAndUpdate({ name: req.body.name }, { img: req.file.filename }).then((resp) => {
            const filepath = "public/" + ritvik.img
            if ((ritvik.img))
                fs.unlink(filepath, (err) => {
                    if (err) throw err;
                    console.log('File deleted successfully!');
                });

            res.json({ img: "http://localhost:5000/" + req.file.filename })
        })
    } else {
        const saveImage = ImageModel({
            name: req.body.name,
            // img: {
            //     data: fs.readFileSync("Images/" + req.file.filename),
            //     contentType: "image/png",
            // }
            img: req.file.filename
        })
        saveImage
            .save()
            .then((resp) => {
                console.log("Image Saved");
                res.json({ img: "http://localhost:5000/" + resp.img })
            })
            .catch((err) => {
                // console.log(err, "Error has occurred");
            })
    }
});

app.get('/:id', async (req, res) => {
    const ritvik = await ImageModel.findOne({ name: req.params.id })
    if (ritvik) {
        // console.log("hffiuhffwuoh"+ritvik.img);
        res.json({ img: "http://localhost:5000/" + ritvik.img })
    }
    else {
        res.json("User Not Found");
    }
})

// function assignid(req, res, next) {
//     req.id = uuidv4();
//     next();
// }
// app.use(morgan(":id :param :method :status :url")); 
app.post('/register', async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const country = req.body.country;
    const password = req.body.password;
    const address = req.body.address;
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)
    const otp = Math.floor(100000 + Math.random() * 900000) + ""
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "officialmasterdsa@gmail.com",
            pass: process.env.password
        }
    })
    const message = {
        from: "officialmasterdsa@gmail.com",
        to: email,
        subject: "OTP for sign in",
        text: `otp is ${otp}`
    }
    const saveUser = new User({
        username: id,
        password: hashPass,
        name: name,
        email: email,
        pnumber: phone,
        country: country,
        Address: address,
        verified: false
    })
    const newOTP = new OTP({
        email: email,
        OTP: otp,
        OTPTime: Date.now()
    })
    OTP.find({ email: email }).then((otp) => {
        if (otp.length > 0) {
            OTP.deleteMany({ email: email })
        }
        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ msg: "some error incurred" })
            } else {
                console.log("email sent");
            }
        })
    })
    newOTP.save().then(otp => {
        saveUser.save().then((resp) => {
            console.log("User Saved");
            res.status(200).send({ message: "user saved" })
        })
            .catch((err) => {
                console.log(err, "Error has occurred");
            })
    })
})

app.post('/verifyotp', async (req, res) => {
    const email = req.body.email
    const givenotp = req.body.otp + ""
    OTP.findOne({ email: email }).then(otp => {
        if (!otp) res.status(201).json({ msg: "invalid otp" })
        else if (otp.OTP === givenotp && otp.OTPTime + 5 * 60 * 1000 > Date.now()) {
            OTP.deleteOne({ _id: otp._id })
            User.findOneAndUpdate({ email: email }, { verified: true }, async err => {
                if (err) throw err
            })
            console.log('nwerwefiuwniuf');
            res.status(200).json({ msg: "verified" })
        }
    })
})

app.post('/login', async (req, res) => {
    const id = req.body.username;
    const password = req.body.password;
    console.log(id)
    User.findOne({ username: id })
        .then(async (user) => {
            if (!user) {
                // User not found in the database
                res.status(401).json({ message: "Invalid username or password" });
            } else if (await bcrypt.compare(password, user.password)) {
                // Passwords match - login successful
                res.status(200).json(user);
            } else {
                // Passwords do not match
                res.status(401).json({ message: "Invalid username or password" });
            }
        })
        .catch((err) => {
            // Error while querying the database
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
        });
});

app.listen(port, () => {
    console.log("server running successfully");
});