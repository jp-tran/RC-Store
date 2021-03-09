import 'reflect-metadata';
import 'dotenv-safe/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { Product } from './entities/Product';
import { Listing } from './entities/Listing';
import { Order } from './entities/Order';
import { PurchasedProduct } from './entities/PurchasedProduct';
import { HelloResolver } from './resolvers/hello';
import { ProductResolver } from './resolvers/product';
import { ListingResolver } from './resolvers/listings';
import { OrderResolver } from './resolvers/order';

const main = async () => {
  await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    // synchronize: true, //entities will be synced with database every time the app is ran
    entities: [Product, Listing, Order, PurchasedProduct],
    uuidExtension: 'pgcrypto',
    migrations: [path.join(__dirname, './migrations/*')], // load migrations here
    cli: {
      migrationsDir: 'migrations', // create migrations here
    },
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
      resolvers: [
        HelloResolver,
        ProductResolver,
        ListingResolver,
        OrderResolver,
      ],
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
