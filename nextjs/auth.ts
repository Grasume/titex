import NextAuth, { type Session, type User} from "next-auth";
import Token from "next-auth";
import { DefaultSession } from "next-auth";
import Eveonline from "next-auth/providers/eveonline"
import { json } from "stream/consumers";
import { jwtDecode } from "jwt-decode";

declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        corp: string;
        characterHash: string;
      } & DefaultSession["user"];
      accessToken: string;
      decodedToken: string;
      token: string;
    }
}


export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
    providers: [
        Eveonline({
            clientId: process.env.EVEONLINE_CLIENT_ID,
            clientSecret: process.env.EVEONLINE_SECRET_KEY
        }),
     ],
     callbacks: {
      async jwt({ token, account }) {

        if (account) {
          
          const decodedToken = jwtDecode(account.access_token);

          //console.log(decodedToken);
          if (decodedToken.iss === "https://login.eveonline.com"){
            //console.log("If Section");
            //console.log(decodedToken.owner);
            token.characterHash = decodedToken.owner;
            token.sub = decodedToken.sub;
          }
        }
        return token;
      },
        async session({ session, user, token }: { session: Session; user: User; token: Token}) {
          if (session?.user) {
            const characterId = token.sub.slice(14)
            session.user.image = `https://image.eveonline.com/Character/${characterId}_128.jpg`;
            session.user.id = token.sub.slice(14);
            session.user.characterHash = token.characterHash;
            //session.accessToken = token.accessToken;
            //session.token = token;

          }
          return session;
        },
      },
    });


