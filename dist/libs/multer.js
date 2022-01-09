"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: '../uploads',
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, new Date().getTime() + '-' + file.originalname);
    },
});
const multerSettings = {
    storage,
    fileFilter: function (req, file, callback) {
        let ext = path_1.default.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'));
        }
        callback(null, true);
    },
    limits: {
        fileSize: 1024 * 1024
    }
};
exports.default = multerSettings;
