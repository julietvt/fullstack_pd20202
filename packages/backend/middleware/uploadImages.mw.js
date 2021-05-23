const multer = require('multer');
const path = require('path');
const { staticPath } = require('./../config/config');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(staticPath + '/images'));
  },
  filename: function (req, file, cb) {
    //sdf7878fsdfsdfsd8723h2jh34g
    //11111111_avatar1.jpeg
    //11111122_avatar1.jpeg
    cb(null, Date.now() + '_' + file.originalname);
  },
});

const MIME_REGEXP = /^image\/(jpeg|png|gif)/;

function fileFilter(req, file, cb) {
  cb(null, MIME_REGEXP.test(file.mimetype));
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
