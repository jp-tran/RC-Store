# Recurse Store
A mock e-commerce platform for [Recurse Center](https://www.recurse.com/) participants and alumni.

## Technologies
### Front-end
* [Next.js](https://nextjs.org/): React framework for server-side rendering
* [Material-UI](https://material-ui.com/): user interface component library
* [Apollo Client](https://www.apollographql.com/docs/react/): state management library to manage data with GraphQL 

### Back-end
* [Node.js](https://nodejs.org/): JavaScript runtime environment
* [Express.js](https://expressjs.com/): framework used to create a GraphQL endpoint
* [GraphQL](https://graphql.org/): data query and manipulation language
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/): GraphQL server
* [TypeORM](https://typeorm.io/): object relational mapping package to work with PostgreSQL
* [PostgreSQL](https://www.postgresql.org/): relational database

### Authentication
* [NextAuth.js](https://next-auth.js.org/): authentication library used to implement OAuth

### Transactions
* [Stripe API](https://stripe.com/): payment processing

## Installation
### Setting Up Your Environment
#### 1. Clone or fork this repository and make sure you have the files locally
```
$ git clone https://github.com/jp-tran/rc-store.git
```

#### 2. This project uses yarn to manage dependencies. Install yarn if you do not have it
```
$ npm i --global yarn
```

### Setting Up the Server
#### 1. Make sure you're in the `server` directory

#### 2. Install dependencies
```
$ yarn install
```

#### 3. [Set up PostgreSQL](https://www.tutorialspoint.com/postgresql/postgresql_environment.htm) and [create a database](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm) locally

#### 4. Create a `.env` file with the following variables
```
PORT=4000
CORS_ORIGIN=http://localhost:3000
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<database-name>
```

#### 5. Compile TypeScript code and run the server
```
$ yarn watch
$ yarn dev
```

### Setting Up the Client
#### 1. Make sure you're in the `client` directory

#### 2. Install dependencies
```
$ yarn install
```

#### 3. Create an OAuth app in [Recurse Center settings](https://www.recurse.com/settings/apps). Set the redirect URI to `http://localhost:3000/api/auth/callback/recurse`.  Save the ID and secret for step 5.

#### 4. Create a Stripe account and go to your Stripe dashboard to get your Stripe Publishable Key and Secret Key.

#### 5. Create a `.env.local` file with the following variables
```
# OAuth Info
RECURSE_ID=<The ID from your Recurse Center settings>
RECURSE_SECRET=<The secret from your Recurse Center settings>
NEXT_AUTH_CONFIG_SECRET=<A random string used to hash tokens, sign cookies and generate crytographic keys>
NEXTAUTH_URL=http://localhost:3000/

# Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<The publishable key from your Stripe dashboard>
STRIPE_SECRET_KEY=<The secret key from your Stripe dashboard>

# GraphQL API URL
NEXT_PUBLIC_API_URL=http://localhost:4000/
```

#### 6. Run the client
```
$ yarn dev
```

## Roadmap
- [x] OAuth 2.0 to sign in with Recurse Center accounts
- [x] Display Recurse Center merch
- [x] Shopping cart and payments with Stripe
- [x] Set up PostgreSQL database and TypeORM
- [x] Integrate client and server with GraphQL
- [x] Deploy front end on Vercel and back end on Heroku
- [ ] Unit tests for front end and back end
- [ ] Marketplace feature for Recursers to sell/buy/trade
