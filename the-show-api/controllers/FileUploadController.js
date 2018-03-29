const { INTERNAL_SERVER_ERROR, OK } = require('http-status-codes');
const moment = require('moment');

const EventLoggerRepository = require('../repositories/EventLoggerRepository');
const ImagesRepository = require('../repositories/ImagesRepository');
const RoutePathConstants = require('../constants/RoutePathConstants');
const ApiError = require('../constants/ApiError');
const server = require('../server');
const LogTypeConstants = require('../constants/LogTypeConstants');

const { images } = RoutePathConstants;

function errorHandler(req, res, error) {
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

exports.POST = (req, res) => {
  const {
    files: { file: imageFile },
    body: {
      filename,
      title,
      category,
      description: details,
      latitude,
      longitude
    }
  } = req;
  const { rootDirectory } = server;
  const currentDateTime = moment(new Date()).format();
  const saveFilename = `${currentDateTime}_${filename}`;
  const destinationFolder = `${rootDirectory}/${images}`;

  imageFile.mv(
    `${destinationFolder}/${saveFilename}`,
    error => {
      if (error) {
        return errorHandler(req, res, error);
      }
      EventLoggerRepository.create(
        LogTypeConstants.info,
        req,
        `Uploaded file: ${saveFilename}, saved to ${destinationFolder}`,
        res.statusCode
      );
      ImagesRepository.create(
        title,
        category,
        details,
        { latitude, longitude },
        saveFilename,
        saveImageError => {
          if (saveImageError) {
            return errorHandler(req, res, error);
          }
          res.status(OK).json({
            file: `${images}/${saveFilename}`
          });
        }
      );
    }
  );
};
