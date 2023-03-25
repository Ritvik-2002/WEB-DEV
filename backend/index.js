const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path")
const imageModel = require("./models");
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const port = 5000;
// app.use(morgan('combined'));
app.use(express.static("public"))
app.use(cors());
// morgan.token('id', function getId(req) {
//     return req.id;
// })
// app.use(assignid);
// app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(
        "mongodb+srv://rivik:ritvik123@cluster0.7tnikj0.mongodb.net/test",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("connected successfully"))
    .catch((err) => console.log("it has an error", err));

// let acessLogStream = fs.createWriteStream(path.join(__dirname, 'acess.log'), { flags: 'a' });

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
    console.log(req.file.filename)
    const ritvik = await imageModel.findOne({ name: req.body.name })
    if (ritvik) {
        imageModel.findOneAndUpdate({ name: req.body.name }, { img: req.file.filename }).then((resp) => {
            const filepath = "public/" + ritvik.img
            fs.unlink(filepath, (err) => {
                if (err) throw err;
                console.log('File deleted successfully!');
            });

            res.json({ img: "http://localhost:5000/" + req.file.filename })
        })
    } else {
        const saveImage = imageModel({
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
                console.log(err, "Error has occurred");
            })
    }
});
app.get('/:id', async (req, res) => {
    const ritvik = await imageModel.findOne({ name: req.params.id })
    if(ritvik){
        // console.log("hffiuhffwuoh"+ritvik.img);
        res.json({ img: "http://localhost:5000/" + ritvik.img })
    }
    else{
        res.json("User Not Found");
    }
})
// app.use(morgan(":param :method :status :url", { stream: acessLogStream }));

// function assignid(req, res, next) {
//     req.id = uuidv4();
//     next();
// }
// app.use(morgan(":id :param :method :status :url")); //This prints directly on console
app.listen(port, () => {
    console.log("server running successfully");
});