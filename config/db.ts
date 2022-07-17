import mongoose from 'mongoose';
import config from 'config';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    console.log('banco conectado');
  } catch (e) {
    console.log(`Nao foi possivel a conexao! Erro: ${e}`);
  }
}

export default connect;
