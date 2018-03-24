const RoutePathConstants = require('../constants/RoutePathConstants');
const { INTERNAL_SERVER_ERROR } = require('http-status-codes');
const ApiError = require('../constants/ApiError');

exports.POST = (req, res) => {
  const imageFile = req.files.file;

  imageFile.mv(
    `${__dirname}/${RoutePathConstants.images}/${req.body.filename}.jpg`,
    err => {
      if (err) {
        return res
          .status(INTERNAL_SERVER_ERROR)
          .send(ApiError.file_upload_failed);
      }
      res.json({
        file: `${RoutePathConstants.images}/${req.body.filename}.jpg`
      });
    }
  );
};
