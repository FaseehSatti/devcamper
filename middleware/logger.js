const logger = (req, res, next) => {
    req.hello = "Hello World";
    // console.log("Middleware Ran");
    // console.log(req.hello);
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}
module.exports = logger;