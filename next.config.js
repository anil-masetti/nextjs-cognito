const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: "demoapponetwo.auth.eu-central-1.amazoncognito.com",
          USER_POOL_ID: "eu-central-1_r5bfWDLKe",
          USER_POOL_CLIENT_ID: "775uncs48kqafrfrs3oq20572o",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: "demoapponetwo-prod.auth.eu-central-1.amazoncognito.com",
          USER_POOL_ID: "eu-central-1_r5bfWDLKe",
          USER_POOL_CLIENT_ID: "775uncs48kqafrfrs3oq20572o",
          REDIRECT_SIGN_IN: "https://aws-cognito-next-example-app.now.sh/token",
          REDIRECT_SIGN_OUT: "https://aws-cognito-next-example-app.now.sh/",
          AUTH_COOKIE_DOMAIN: "aws-cognito-next-example-app.now.sh",
        },
      };
  }
};