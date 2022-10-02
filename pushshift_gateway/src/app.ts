import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import UserRouter from './routes/users';
import IndexRouter from './routes/index';
import JwstRouter from './routes/jwst';
import cors from 'cors';


var app = express();

app.use(cors({
  origin: '*'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', IndexRouter);
app.use('/users', UserRouter);
app.use('/jwst', JwstRouter);

export default app;