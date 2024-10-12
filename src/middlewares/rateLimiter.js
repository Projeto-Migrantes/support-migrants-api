import { rateLimit } from 'express-rate-limit';

// Request limiter in 15 minutes for 100 requests per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: 'You have made too many requests, please try again later.',
});

export default limiter;