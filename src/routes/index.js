import webRouter from './web.js'

const initRoute = (app) => {
    return app.use('/', webRouter);
}

export default initRoute;