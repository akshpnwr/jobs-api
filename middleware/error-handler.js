const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {

  console.log(err);
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong!'
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate entry for ${Object.keys(err.keyValue)} field.`
    customError.statusCode = 400
  }
  if (err.name && err.name === 'ValidationError') {
    customError.msg = `${Object.values(err.errors).map(item => item.message)}`
    customError.statusCode = 400
  }
  if (err.name && err.name === 'CastError') {
    customError.msg = `No item found with id: ${err.value}`
    customError.statusCode = 404
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
