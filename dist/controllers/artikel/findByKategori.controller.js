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
const error_helper_1 = __importDefault(require("../../helper/error.helper"));
const Artikel = require('../../db/models').tbl_artikel;
const Gambar = require('../../db/models').tbl_gambar;
const Kategori = require('../../db/models').tbl_kategori;
class ArtikelListByKategori extends index_core_1.default {
    constructor() {
        super(Artikel);
    }
    exec(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let kategori_id = req.params.id;
                let data = yield Artikel.findAll({
                    include: [
                        { model: Kategori, as: 'tbl_kategoris' },
                        { model: Gambar, as: 'tbl_gambars' }
                    ],
                    where: { kategori_id: kategori_id },
                });
                return res.status(200).json({
                    status: 'success',
                    message: 'header berhasil ditampilkan',
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
exports.default = ArtikelListByKategori;
