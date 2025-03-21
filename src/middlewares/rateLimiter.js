import { rateLimit } from 'express-rate-limit';

/*
* Rate limiter middleware to limit the number of requests made by a user in a given time frame
*/
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000, 
    message: 'You have made too many requests, please try again later.',
});

export default limiter;