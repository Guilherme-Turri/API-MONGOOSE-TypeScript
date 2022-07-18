import { Request, Response } from 'express';

//model
import { MovieModel } from '../middleware/models/movie';

//Logger
import Logger from '../../config/logger';

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Erro no sistem: ${error.message}`);
  }
}
