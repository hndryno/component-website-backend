"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class informationValidation {
}
informationValidation.CreateCsValidation = [
    (0, express_validator_1.check)("nama_website")
        .not()
        .isEmpty().withMessage('Field nama_website tidak boleh kosong'),
    (0, express_validator_1.check)("deskripsi")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi tidak boleh kosong"),
    (0, express_validator_1.check)("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
    (0, express_validator_1.check)("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
    (0, express_validator_1.check)("facebook")
        .not()
        .isEmpty()
        .withMessage("Field facebook tidak boleh kosong"),
    (0, express_validator_1.check)("instagram")
        .not()
        .isEmpty()
        .withMessage("Field instagram tidak boleh kosong"),
    (0, express_validator_1.check)("twitter")
        .not()
        .isEmpty()
        .withMessage("Field twitter tidak boleh kosong")
];
informationValidation.UpdateCsValidation = [
    (0, express_validator_1.check)("nama_website")
        .not()
        .isEmpty().withMessage('Field nama_website tidak boleh kosong'),
    (0, express_validator_1.check)("deskripsi")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi tidak boleh kosong"),
    (0, express_validator_1.check)("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
    (0, express_validator_1.check)("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
    (0, express_validator_1.check)("facebook")
        .not()
        .isEmpty()
        .withMessage("Field facebook tidak boleh kosong"),
    (0, express_validator_1.check)("instagram")
        .not()
        .isEmpty()
        .withMessage("Field instagram tidak boleh kosong"),
    (0, express_validator_1.check)("twitter")
        .not()
        .isEmpty()
        .withMessage("Field twitter tidak boleh kosong")
];
exports.default = informationValidation;
