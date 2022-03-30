import errorHandler from './src/Middlewares/ErrorHandlerMiddleware.js';
import express from 'express';
import router from "./router.js";

const PORT = 3000

const app = express()

app.use(express.json())
app.use('/', router)
app.use(errorHandler);

app.get('/', function (req, res) {
    res.status(200).json('SERVER IS WORKING')
});

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))

app.use((req, res, next) => {
    console.log('middleware');
})

