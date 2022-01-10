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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const error_helper_1 = __importDefault(require("../../helper/error.helper"));
const Information = require('../../db/models').tbl_information;
const Gambar = require('../../db/models').tbl_gambar;
let dir = path_1.default.join(__dirname, '../../../uploads');
class InformationDelete extends index_core_1.default {
    constructor() {
        super(Information);
    }
    exec(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                let information = yield Information.findOne({ where: { id }, raw: true });
                let gambar_id = information.gambar_id;
                let old_image = yield Gambar.findOne({ where: { id: gambar_id }, raw: true });
                //unlink gambarnya
                let file_name = old_image.filename;
                yield fs_1.default.unlinkSync(`${dir}/${file_name}`);
                //hapus data gambarnya
                yield Gambar.destroy({ where: { id: gambar_id } });
                //hapus datanya
                let data = yield Information.destroy({ where: { id } });
                return res.status(200).json({
                    status: 'success',
                    message: 'data berhasil dihapus',
                    data
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
exports.default = InformationDelete;
