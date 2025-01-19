import 'dotenv/config';

export const env = {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME:process.env.DB_NAME,

    HOST:process.env.HOST,
    PORT:process.env.PORT,

    BUILD_MODE:process.env.BUILD_MODE,

    AUTHOR:process.env.AUTHOR,
}
