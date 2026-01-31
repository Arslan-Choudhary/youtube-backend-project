import dotenv from "dotenv";
dotenv.config();

const env = process.env;

const ENV = {
    DB: {
        MONGODB_URI: env.MONGODB_URI,
        DB_NAME: env.DB_NAME,
    },
    port: env.PORT,
    CORS: env.CORS_ORIGIN,
    ACCESS_TOKEN_SECRET: env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY: env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_SECRET: env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY: env.REFRESH_TOKEN_EXPIRY,
};

export default ENV;
