app.use(function(req, res, next) {
  next(createError(404));
});