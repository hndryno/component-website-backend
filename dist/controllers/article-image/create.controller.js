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
const uuid_1 = require("uuid");
const Article = require('../../db/models').tbl_artikel;
const error_helper_1 = __importDefault(require("../../helper/error.helper"));
class ArtikelImage extends index_core_1.default {
    constructor() {
        super(Article);
    }
    exec(req, res, next) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('masuk heheheh');
                console.log(req.file);
                const id = (0, uuid_1.v4)();
                let nama = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
                let type = (_b = req.file) === null || _b === void 0 ? void 0 : _b.mimetype;
                let data = (_c = req.file) === null || _c === void 0 ? void 0 : _c.path;
                // let fileName:any = (file.substr(0, file.lastIndexOf('.')))
                // let unique_filename = uuidv4(fileName)
                // let { type, data, nama } = req.body
                // let request_data:any = { id, nama, type, data }
                // let data_response = await GambarArtikelInstance.create(request_data)
                return res.status(201).json({
                    status: 'success',
                    message: 'artikel berhasil dibuat',
                    // data: data_response
                });
            }
            catch (err) {
                let message = 'Unknown Error';
                let error_result = yield (0, error_helper_1.default)(err, message);
                return res.status(400).json({
                    error_result
                });
            }
        });
    }
}
exports.default = ArtikelImage;
