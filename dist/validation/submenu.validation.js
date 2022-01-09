"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class subMenuValidation {
}
subMenuValidation.CreateSubMenuValidation = [
    express_validator_1.check("menu_id")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
    express_validator_1.check("nama")
        .not()
        .isEmpty()
        .withMessage("Field nama tidak boleh kosong"),
    express_validator_1.check("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
    express_validator_1.check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
    express_validator_1.check("url")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
    express_validator_1.check("target")
        .not()
        .isEmpty()
        .withMessage("Field target tidak boleh kosong")
];
subMenuValidation.UpdateSubMenuValidation = [
    express_validator_1.check("menu_id")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
    express_validator_1.check("nama")
        .not()
        .isEmpty()
        .withMessage("Field nama tidak boleh kosong"),
    express_validator_1.check("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
    express_validator_1.check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
    express_validator_1.check("url")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
    express_validator_1.check("target")
        .not()
        .isEmpty()
        .withMessage("Field target tidak boleh kosong")
];
exports.default = subMenuValidation;
