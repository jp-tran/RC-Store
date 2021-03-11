# Recurse Store
A mock e-commerce platform for [Recurse Center](https://www.recurse.com/) participants and alumni.

## Technologies
### Front-end
* Next.js: React framework for server-side rendering
* Material-UI: user interface component library
* Apollo Client: state management library to manage data with GraphQL 

### Back-end
* Node.js: JavaScript runtime environment
* Express.js: framework used to create a GraphQL endpoint
* GraphQL: data query and manipulation language
* Apollo Server: GraphQL server
* TypeORM: object relational mapping package to work with PostgreSQL
* PostgreSQL: relational database

### Authentication
* NextAuth.js: authentication library used to implement OAuth

### Transactions
* Stripe API: payment processing

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

#### 3. Create a `.env.local` file with the following variables
```
# OAuth Info
RECURSE_ID=
RECURSE_SECRET=
NEXT_AUTH_CONFIG_SECRET=
NEXTAUTH_URL=http://localhost:3000/

# Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# GraphQL API URL
NEXT_PUBLIC_API_URL=http://localhost:4000/
```

#### 4. Run the client
```
$ yarn dev
```
