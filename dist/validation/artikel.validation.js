"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class artikelValidation {
}
artikelValidation.CreateArtikelValidation = [
    express_validator_1.check("nama_artikel")
        .not()
        .isEmpty().withMessage('Field nama artikel tidak boleh kosong'),
    express_validator_1.check("deskripsi_artikel")
        .not()
        .isEmpty().withMessage('Field deskripsi tidak boleh kosong'),
    express_validator_1.check("kategori_id")
        .not()
        .isEmpty()
        .withMessage("Field kategori_id tidak boleh kosong"),
];
artikelValidation.UpdateArtikelValidation = [
    express_validator_1.check("nama_artikel")
        .not()
        .isEmpty().withMessage('Field nama artikel tidak boleh kosong'),
    express_validator_1.check("deskripsi_artikel")
        .not()
        .isEmpty().withMessage('Field deskripsi tidak boleh kosong'),
    express_validator_1.check("kategori_id")
        .not()
        .isEmpty()
        .withMessage("Field kategori_id tidak boleh kosong"),
];
exports.default = artikelValidation;
