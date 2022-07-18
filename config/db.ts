import mongoose from 'mongoose';
import config from 'config';
import Logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    Logger.info('banco conectado');
  } catch (e) {
    Logger.error(`Nao foi possivel a conexao! Erro: ${e}`);
    process.exit(1);
  }
}

export default connect;
