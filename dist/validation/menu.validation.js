"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class menuValidation {
}
menuValidation.CreateCsValidation = [
    (0, express_validator_1.check)("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
    (0, express_validator_1.check)("link")
        .not()
        .isEmpty()
        .withMessage("Field link tidak boleh kosong"),
    (0, express_validator_1.check)("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
];
menuValidation.UpdateCsValidation = [
    (0, express_validator_1.check)("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
    (0, express_validator_1.check)("link")
        .not()
        .isEmpty()
        .withMessage("Field link tidak boleh kosong"),
    (0, express_validator_1.check)("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
];
exports.default = menuValidation;
