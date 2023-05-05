import dotenv from 'dotenv';

dotenv.config()

export const config = {
    port: process.env.PORT || 5000,
    pageAccessToken: process.env.PAGE_ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    myVerifyToken: process.env.MY_VERIFY_TOKEN,
};