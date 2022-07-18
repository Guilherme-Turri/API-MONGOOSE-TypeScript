import { body } from 'express-validator';

export const movieCreteValidation = () => {
  return [
    body('title')
      .isString()
      .withMessage('O Titulo é obrigatório')
      .isLength({ min: 5 })
      .withMessage('Precisa de no minimo 5 caracteres'),
    body('rating').isNumeric().withMessage('A nota precisa ser um numero'),
    body('description').isString().withMessage('A descricao é obrigatória'),
    body('director').isString().withMessage('A direçao é obrigatória'),
    body('poster').isURL().withMessage('A imagem precisa ser uma URL'),
  ];
};
