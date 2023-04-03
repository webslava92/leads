/* eslint-disable no-console */
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import router from './routes';
import { sequelize } from './configDb/configDb';
import { leadRoute } from './lead/lead.route';
import { uploadRoute } from './upload/upload.route';

const corsOptions = {
  // origin(origin, callback) {
  //   callback(null, true);
  // },
  // methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  // optionsSuccessStatus: 200,
  // credentials: true,
  // allowedHeaders: [
  //   'Content-Type',
  //   'Authorization',
  //   'X-Requested-With',
  //   'device-remember-token',
  //   'Access-Control-Allow-Origin',
  //   'Origin',
  //   'Accept',
  // ],
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send(`Server started on port ${PORT}`);
});
// app.use('/api', router);
app.use('/api', leadRoute());
app.use('/api', uploadRoute());

const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
