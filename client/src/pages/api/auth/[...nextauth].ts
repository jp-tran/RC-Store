import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';

const options = {
  providers: [
    {
      id: 'recurse',
      name: 'Recurse Center',
      type: 'oauth',
      version: '2.0',
      accessTokenUrl: 'https://www.recurse.com/oauth/token',
      // requestTokenUrl: 'https://www.recurse.com/oauth/token',
      authorizationUrl:
        'https://www.recurse.com/oauth/authorize?response_type=code',
      clientId: process.env.RECURSE_ID,
      clientSecret: process.env.RECURSE_SECRET,
      params: { grant_type: 'authorization_code' },
      scope: '',
      profileUrl: 'https://www.recurse.com/api/v1/profiles/me',
      async profile(profile: any) {
        return {
          id: profile.id,
          name: profile.first_name,
          email: profile.email,
          image: profile.image_path,
        };
      },
    },
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
  secret: process.env.NEXT_AUTH_CONFIG_SECRET,
  site: 'http://localhost:3000',
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
