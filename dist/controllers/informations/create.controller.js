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
const Information = require('../../db/models').tbl_information;
const express_validator_1 = require("express-validator");
const error_helper_1 = __importDefault(require("../../helper/error.helper"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const Image = require('../../db/models').tbl_gambar;
let dir = path_1.default.join(__dirname, '../../../uploads');
class InformationCreate extends index_core_1.default {
    constructor() {
        super(Information);
    }
    exec(req, res, next) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let information_length = yield Information.findAll({}, { raw: true });
                if (information_length.length > 0) {
                    throw new Error('maaf hanya boleh menambahkan 1 informasi');
                }
                const id2 = (0, uuid_1.v4)();
                let filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
                let original_name = (_b = req.file) === null || _b === void 0 ? void 0 : _b.originalname;
                let path = (_c = req.file) === null || _c === void 0 ? void 0 : _c.path;
                let mimetype = (_d = req.file) === null || _d === void 0 ? void 0 : _d.mimetype;
                let req_data = { id: id2, filename, original_name, path, mimetype };
                let save_image = yield Image.create(req_data);
                let gambar_id = save_image.dataValues.id;
                const id = (0, uuid_1.v4)();
                let { nama_website, deskripsi, facebook, twitter, instagram, lokasi, tahun, copyright } = req.body;
                console.log(req.body);
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    yield fs_1.default.unlinkSync(`${dir}/${filename}`);
                    return res.status(400).send({
                        status: "Error",
                        message: errors.array()
                    });
                }
                let request_data = { id, nama_website, deskripsi, lokasi, facebook, twitter, instagram, gambar_id, tahun, copyright };
                let data = yield Information.create(request_data);
                return res.status(201).json({
                    status: 'success',
                    message: 'data berhasil dibuat',
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
exports.default = InformationCreate;
