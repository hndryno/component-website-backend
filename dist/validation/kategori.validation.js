"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class kategoriValidation {
}
kategoriValidation.CreateKategoriValidation = [
    express_validator_1.check("nama_kategori")
        .not()
        .isEmpty().withMessage('Field nama kategori tidak boleh kosong'),
    express_validator_1.check("deskripsi_kategori")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi kategori tidak boleh kosong"),
];
kategoriValidation.UpdateKategoriValidation = [
    express_validator_1.check("nama_kategori")
        .not()
        .isEmpty().withMessage('Field nama kategori tidak boleh kosong'),
    express_validator_1.check("deskripsi_kategori")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi kategori tidak boleh kosong"),
];
exports.default = kategoriValidation;
