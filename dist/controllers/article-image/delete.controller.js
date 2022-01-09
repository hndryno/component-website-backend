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
const index_core_1 = __importDefault(require("../../core/index.core"));
const Article = require('../../db/models').tbl_artikel;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const error_helper_1 = __importDefault(require("../../helper/error.helper"));
class ArtikelImageDelete extends index_core_1.default {
    constructor() {
        super(Article);
    }
    exec(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dir = path_1.default.join(__dirname, '../../../uploads');
                let delete_image = yield fs_1.default.unlinkSync(`${dir}/1641019526719-geek-avatar.jpg`);
                console.log(delete_image);
                return res.status(201).json({
                    status: 'success',
                    message: 'artikel berhasil dibuat',
                });
            }
            catch (err) {
                let message = 'Unknown Error';
                let error_result = yield error_helper_1.default(err, message);
                return res.status(400).json({
                    error_result
                });
            }
        });
    }
}
exports.default = ArtikelImageDelete;
