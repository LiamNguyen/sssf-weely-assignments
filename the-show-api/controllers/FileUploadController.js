const { INTERNAL_SERVER_ERROR, OK } = require('http-status-codes');
const moment = require('moment');

const EventLoggerRepository = require('../repositories/EventLoggerRepository');
const RoutePathConstants = require('../constants/RoutePathConstants');
const ApiError = require('../constants/ApiError');
const server = require('../server');
const LogTypeConstants = require('../constants/LogTypeConstants');

const { images } = RoutePathConstants;

exports.POST = (req, res) => {
  const { files: { file: imageFile }, body: { filename } } = req;
  const { rootDirectory } = server;
  const currentDateTime = moment(new Date()).format();
  const saveFilename = `${currentDateTime}_${filename}`;
  const destinationFolder = `${rootDirectory}/${images}`;

  imageFile.mv(
    `${destinationFolder}/${saveFilename}`,
    error => {
      if (error) {
        EventLoggerRepository.create(
          LogTypeConstants.error,
          req,
          error,
          res.statusCode
        );
        return res
          .status(INTERNAL_SERVER_ERROR)
          .send(ApiError.file_upload_failed);
      }

      EventLoggerRepository.create(
        LogTypeConstants.info,
        req,
        `Uploaded file: ${saveFilename}, saved to ${destinationFolder}`,
        res.statusCode
      );
      res.status(OK).json({
        file: `${images}/${saveFilename}`
      });
    }
  );
};
