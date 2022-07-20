import { Router, Request, Response } from 'express';
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovice,
} from './Controllers/movieControllers';
import { movieCreteValidation } from './middleware/movieValidation';

//validation
import { validate } from './middleware/handleValidation';

const router = Router();

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).send('API WORKING');
  })
  .post('/movie', movieCreteValidation(), validate, createMovie)
  .get('/movie/:id', findMovieById)
  .get('/movie', getAllMovies)
  .delete('/movie/:id', removeMovie)
  .patch('/movie/:id', updateMovice);
