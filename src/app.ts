import express, {Application} from 'express';
import morgan from 'morgan';
import db from './config/database.config';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './routes/index.routes';
import { config as dotenv } from 'dotenv';
import path from 'path';

export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.dbConnection();
        this.settings();
        this.middlewares();
        this.routes();
        dotenv();
    }

    async dbConnection(){

        //untuk mysql2
        await db.authenticate().then(() => console.log('database connected'))
        .catch(err => console.log(err))

        //ini untuk sqllite
        // await db.sync().then(() => {
        //     console.log('connect to database');
        // })

    }

    settings(){
        this.app.set(`port`, this.port || process.env.PORT || 3000)
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(bodyParser.json())
        this.app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
        this.app.use(bodyParser.json())
    }

    routes(){
        router(this.app)
    }
    

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log(`Server running on port ${this.app.get('port')}`);
    }
}