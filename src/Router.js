const rt = require("express").Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../misto-backend/src/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "primary-img-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../misto-backend/src/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      "secondary-imgs-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
const uploads = multer({ storage: storages });

/* ==== Router for sign in  and sign up ==== */
const login = require("./Controller/login");
const upLoadImg = require("./Controller/uploadImages");
// const newLocal = "./Validation/validator";
// const { passthrough } = require(newLocal);

rt.post("/api/signup", login.signup);
rt.post("/api/signin", login.signin);

/* ==== Router for upload images ==== */
rt.post("/api/upload/file", upload.single("file"), upLoadImg.mainImg);
rt.post("/api/upload/files", uploads.array("files"), upLoadImg.secondImg);

/* ==== Router for Editing data ==== */

const EditData = require("./Controller/edit");

rt.post("/api/user-edit/:id", EditData.EditUser);
rt.post("/api/card-edit/:id", EditData.EditCard);

/*  Router for Editing data */

const addCard = require("./Controller/addNewCard");

rt.post("/api/add-card", addCard.addNewCard);

module.exports = rt;
