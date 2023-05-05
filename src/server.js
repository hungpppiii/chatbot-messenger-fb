import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app = express();

dotenv.config()

import {
    configViewEngine
} from './config/viewEngine.js';
import initRoute from './routes/index.js';
import bodyParser from 'body-parser';
import {
    errorHandler
} from './middlewares/errorHandler.js';
import {
    config
} from './config/config.js';

app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

configViewEngine(app);
initRoute(app);
app.use(errorHandler);

// Verify that the callback came from Facebook.
function verifyRequestSignature(req, res, buf) {
    var signature = req.headers["x-hub-signature-256"];

    if (!signature) {
        console.warn(`Couldn't find "x-hub-signature-256" in headers.`);
    } else {
        var elements = signature.split("=");
        var signatureHash = elements[1];
        var expectedHash = crypto
            .createHmac("sha256", config.appSecret)
            .update(buf)
            .digest("hex");
        if (signatureHash != expectedHash) {
            throw new Error("Couldn't validate the request signature.");
        }
    }
}

app.listen(config.port, () => {
    console.log(`Chatbot listening on port http://localhost:${config.port}`)
})