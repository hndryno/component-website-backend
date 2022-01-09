"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class informationValidation {
}
informationValidation.CreateCsValidation = [
    (0, express_validator_1.check)("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
    (0, express_validator_1.check)("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
    (0, express_validator_1.check)("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
];
informationValidation.UpdateCsValidation = [
    (0, express_validator_1.check)("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
    (0, express_validator_1.check)("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
    (0, express_validator_1.check)("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
];
exports.default = informationValidation;
