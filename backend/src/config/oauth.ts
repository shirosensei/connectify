import passport from "passport";
import dotenv from "dotenv";
import OAuth2Strategy, {
  StrategyOptions,
  VerifyCallback,
} from "passport-oauth2";

dotenv.config();

class OAuth2Config implements StrategyOptions {
  authorizationURL: string;
  tokenURL: string;
  clientID: string;
  clientSecret: string;
  callbackURL: string;

  constructor() {
    this.authorizationURL = process.env.OAUTH2_AUTHORIZATION_URL || "";
    this.tokenURL = process.env.OAUTH2_TOKEN_URL || "";
    this.clientID = process.env.OAUTH2_CLIENT_ID || "";
    this.clientSecret = process.env.OAUTH2_CLIENT_SECRET || "";
    this.callbackURL = process.env.OAUTH2_CALLBACK_URL || "";

    // Validate properties
    if (
      !this.authorizationURL ||
      !this.tokenURL ||
      !this.clientID ||
      !this.clientSecret ||
      !this.callbackURL
    ) {
      throw new Error("Invalid OAuth2 configuration");
    }
  }
}

passport.use(
  new OAuth2Strategy(
    new OAuth2Config(),
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: VerifyCallback
    ) => {
      return done(null, profile);
    }
  )
);
