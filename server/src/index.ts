import 'reflect-metadata';
import 'dotenv-safe/config';
import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { Product } from './entities/Product';
import { Listing } from './entities/Listing';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { ProductResolver } from './resolvers/product';
import { ListingResolver } from './resolvers/listings';

const main = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'recurse-store',
    username: process.env.DATATBASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
    synchronize: true, //entities will be synced with database every time the app is ran
    entities: [Product, Listing],
    uuidExtension: 'pgcrypto',
  });

  const app = express();

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, ProductResolver, ListingResolver],
      validate: false,
    }),
  });

  // create graphql endpoint on express
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(parseInt(process.env.PORT as string), () => {
    console.log(`Server started on port: ${process.env.PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
});
