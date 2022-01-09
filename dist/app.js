"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const database_config_1 = __importDefault(require("./config/database.config"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.dbConnection();
        this.settings();
        this.middlewares();
        this.routes();
        dotenv_1.config();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            //untuk mysql2
            yield database_config_1.default.authenticate().then(() => console.log('database connected'))
                .catch(err => console.log(err));
            //ini untuk sqllite
            // await db.sync().then(() => {
            //     console.log('connect to database');
            // })
        });
    }
    settings() {
        this.app.set(`port`, this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        index_routes_1.default(this.app);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log(`Server running on port ${this.app.get('port')}`);
        });
    }
}
exports.App = App;
