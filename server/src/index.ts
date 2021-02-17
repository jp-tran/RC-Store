import 'reflect-metadata';
import 'dotenv-safe/config';
import { createConnection } from 'typeorm';
import { Product } from './entities/Product';

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: parseInt(process.env.PORT as string),
    database: 'recurse-store',
    username: process.env.DATATBASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
    synchronize: true, //entities will be synced with database every time the app is ran
    entities: [Product],
    uuidExtension: 'pgcrypto',
  });
};

main().catch((err) => {
  console.error(err);
});
