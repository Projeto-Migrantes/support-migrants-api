
/*
* Middleware functions for handling error 
*/
const errorHandler = (err, req, res, next) => {

    if (res.headersSent) {
        return next(err); 
    };

    res.status(500).json({ error: 'Internal Server Error' });
};

/*
* Middleware function for handling not found routes
*/
const notFoundHandler = (req, res) => {
    res.status(404).json({ error: 'Check URL, route not found' });
};

export { 
    errorHandler, 
    notFoundHandler 
};
