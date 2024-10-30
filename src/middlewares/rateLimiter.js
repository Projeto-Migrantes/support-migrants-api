import { rateLimit } from 'express-rate-limit';

// Request limiter in 5s for 1000 requests per IP
const limiter = rateLimit({
    windowMs: 5 * 1000, 
    max: 1000, 
    message: 'You have made too many requests, please try again later.',
});

export default limiter;