import { body } from 'express-validator';

export const movieCreteValidation = () => {
  return [body('title').isString().withMessage('O Titulo é obrigatório')];
};
