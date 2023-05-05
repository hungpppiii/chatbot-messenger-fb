import express from 'express';
import path, {
    dirname
} from 'path'
import ejs from 'ejs'
import {
    fileURLToPath
} from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '..', 'views'));
}

export {
    configViewEngine
};