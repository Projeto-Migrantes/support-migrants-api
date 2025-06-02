import { rateLimit } from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100, 
    message: 'You have made too many requests, please try again later.',
});

export default limiter;
