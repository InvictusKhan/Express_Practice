const errorHandler = (err, req, res, next) => {
    res.status(404).json({Message: err.message});

};

export default errorHandler;