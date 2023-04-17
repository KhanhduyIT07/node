import express from 'express';
import path from 'path';
const app = express();

import indexRouter from './Router/index';
import aboutRouter from './Router/abouts,';
//config import
import { connect } from './config/connectDB';
//config views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));
//config public
app.use(express.static(path.join(__dirname, 'public')));

//
connect();
app.use('/', indexRouter);
app.use('/abouts', aboutRouter);
app.listen(3000, () => {
  console.log('sever runing okkk !!!');
});
