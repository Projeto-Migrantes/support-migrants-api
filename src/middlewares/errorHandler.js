// Middleware to handle general errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); 

    if (res.headersSent) {
        return next(err); 
    }

    // Handling for internal server error
    res.status(500).json({ error: 'Internal Server Error' });
};

// Middleware for routes not found
const notFoundHandler = (req, res) => {
    res.status(404).json({ error: 'Check URL, route not found' });
};

export { errorHandler, notFoundHandler };
