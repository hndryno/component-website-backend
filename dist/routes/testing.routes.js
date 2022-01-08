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
const express_1 = require("express");
const create_controller_1 = __importDefault(require("../controllers/article-image/create.controller"));
const list_controller_1 = __importDefault(require("../controllers/article-image/list.controller"));
const view_controller_1 = __importDefault(require("../controllers/article-image/view.controller"));
const delete_controller_1 = __importDefault(require("../controllers/article-image/delete.controller"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: '../uploads',
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, new Date().getTime() + '-' + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
// import multer from 'multer';
// import multerSettings from '../libs/multer';
// const upload = multer{(storage: multerSettings});
const router = (0, express_1.Router)();
router.post('/', upload.single('image'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new create_controller_1.default().exec(req, res, next); }));
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new list_controller_1.default().exec(req, res, next); }));
router.get('/show/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new view_controller_1.default().exec(req, res, next); }));
router.delete('/delete/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new delete_controller_1.default().exec(req, res, next); }));
exports.default = router;
