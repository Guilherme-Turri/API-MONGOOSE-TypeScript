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

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'o filme nao existe' });
    }

    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error(`Erro no sistem: ${error.message}`);
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (error: any) {
    Logger.error(`Erro no sistem: ${error.message}`);
  }
}
export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'o filme nao existe' });
    }

    await movie.delete();
    return res.status(200).json({ msg: 'o filme foi removido com sucesso' });
  } catch (error: any) {
    Logger.error(`Erro no sistem: ${error.message}`);
  }
}

export async function updateMovice(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'o filme nao existe' });
    }

    await MovieModel.updateOne({ _id: id }, data);
    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error(`Erro no sistem: ${error.message}`);
  }
}
