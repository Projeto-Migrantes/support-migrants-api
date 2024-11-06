import { rateLimit } from 'express-rate-limit';

// Request limiter in 1s for 1000 requests per IP
const limiter = rateLimit({
    windowMs: 1 * 1000, 
    max: 100, 
    message: 'You have made too many requests, please try again later.',
});

export default limiter;