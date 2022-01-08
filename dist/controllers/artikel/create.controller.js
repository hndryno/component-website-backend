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
const express_validator_1 = require("express-validator");
const Artikel = require('../../db/models').tbl_artikel;
class ArtikelCreate extends index_core_1.default {
    constructor() {
        super(Artikel);
    }
    exec(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(req.file)
                // console.log(req.body)
                const id = (0, uuid_1.v4)();
                const errors = (0, express_validator_1.validationResult)(req);
                let { nama_artikel, deskripsi_artikel, kategori_id } = req.body;
                if (!errors.isEmpty()) {
                    return res.status(400).send({
                        status: "Error",
                        message: errors.array()
                    });
                }
                let request_data = { id, nama_artikel, deskripsi_artikel, kategori_id };
                let data = yield Artikel.create(request_data);
                return res.status(201).json({
                    status: 'success',
                    message: 'artikel berhasil dibuat',
                    data
                });
            }
            catch (err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message
                });
            }
        });
    }
}
exports.default = ArtikelCreate;
