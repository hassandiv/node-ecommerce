//not found

const notFound = (req, res, next) => {
  //req is requesting the url that has made the request to
  //example user goes to https://lunar.co/wrongurl
  //we've requested the url that user entered in the browser and made their request to
  //req is used for getting any information the user/client making request to
  const error = new Error(`Not Found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//Error Handler

const errorHandler = (req, res, err, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err?.message,
    stack: err.stack,
  });
};

module.exports = { notFound, errorHandler };
