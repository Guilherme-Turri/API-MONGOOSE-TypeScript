import { Router, Request, Response } from 'express';
import { createMovie } from './Controllers/movieControllers';
import { movieCreteValidation } from './middleware/movieValidation';

//validation
import { validate } from './middleware/handleValidation';

const router = Router();

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).send('API WORKING');
  })
  .post('/movie', movieCreteValidation(), validate, createMovie);
