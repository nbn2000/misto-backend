const path = require("path");
const sizeOf = require("image-size");
const Jimp = require("jimp");
const response = require("../Service/response.service");

class upLoadImg {
  async mainImg(req, res) {
    try {
      const filePath = path.join(__dirname, `../images/${req.file.filename}`);
      const img = `http://${req.headers.host}/img/${req.file.filename}`;

      sizeOf(filePath);
      await Jimp.read(filePath).then((image) =>
        image.resize(255, 318).write(filePath)
      );
      response.success(res, "file successfully uploaded", img);
    } catch (err) {
      response.internal(res, "failed to upload image", err);
    }
  }

  async secondImg(req, res) {
    try {
      const files = req?.files;
      const img = [];
      await files?.map((file) => {
        const filePath = path.join(__dirname, "../images", file?.filename);
        img.push(`http://${req?.headers?.host}/img/${file?.filename}`);
        sizeOf(filePath);
        Jimp.read(filePath).then((image) =>
          image.resize(448, 560).write(filePath)
        );
      });
      response.success(res, "file successfully uploaded", img);
    } catch (err) {
      console.error(err);
      response.internal(res, "failed to upload image", err);
    }
  }
}

module.exports = new upLoadImg();
