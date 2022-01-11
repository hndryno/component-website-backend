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
const Information = require('../../db/models').tbl_information;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const error_helper_1 = __importDefault(require("../../helper/error.helper"));
const Gambar = require('../../db/models').tbl_gambar;
const Artikel = require('../../db/models').tbl_artikel;
let dir = path_1.default.join(__dirname, '../../../uploads');
class InformationUpdate extends index_core_1.default {
    constructor() {
        super(Information);
    }
    exec(req, res, next) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                //ambil gambar_idnya dari artikel
                let information = yield Information.findOne({ where: { id }, raw: true });
                let gambar_id = information.gambar_id;
                //kalau ada filenya update filenya
                if (req.file) {
                    console.log('filenya perlu diupdate');
                    //ambil file lama based on id artikelnya
                    let old_image = yield Gambar.findOne({ where: { id: gambar_id }, raw: true });
                    let old_image_id = old_image.id;
                    let file_name = old_image.filename;
                    //hapus gambar dari foldernya
                    yield fs_1.default.unlinkSync(`${dir}/${file_name}`);
                    //update file lamanya dengan file baru
                    let filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
                    let original_name = (_b = req.file) === null || _b === void 0 ? void 0 : _b.originalname;
                    let path = (_c = req.file) === null || _c === void 0 ? void 0 : _c.path;
                    let mimetype = (_d = req.file) === null || _d === void 0 ? void 0 : _d.mimetype;
                    let request_data_gambar = { filename, original_name, path, mimetype };
                    //update query
                    yield Gambar.update(request_data_gambar, { where: { id: old_image_id } });
                }
                let { nama_website, deskripsi, lokasi, facebook, twitter, instagram, tahun, copyright } = req.body;
                let request_data = { id, nama_website, deskripsi, lokasi, facebook, twitter, instagram, gambar_id, tahun, copyright };
                let data = yield Information.update(request_data, { where: { id } });
                return res.status(201).json({
                    status: 'success',
                    message: 'data berhasil diupdate',
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
exports.default = InformationUpdate;
