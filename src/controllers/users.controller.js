import { Router } from 'express';
import institutionService from "../services/institution.service.js";
import migrantService from "../services/migrant.service.js";

class UserController {
    async count(req, res){
        const institutionsCount = await institutionService.count();
        const migrantsCount = await migrantService.count();
        const count = institutionsCount + migrantsCount; 
        return res.status(200).json({ count })
    }
}

export default new UserController();