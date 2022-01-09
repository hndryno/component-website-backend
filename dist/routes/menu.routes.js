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
const express_1 = require("express");
const create_controller_1 = __importDefault(require("../controllers/menu/create.controller"));
const list_controller_1 = __importDefault(require("../controllers/menu/list.controller"));
const show_controller_1 = __importDefault(require("../controllers/menu/show.controller"));
const update_controller_1 = __importDefault(require("../controllers/menu/update.controller"));
const delete_controller_1 = __importDefault(require("../controllers/menu/delete.controller"));
const menu_validation_1 = __importDefault(require("../validation/menu.validation"));
const router = express_1.Router();
router.post('/', menu_validation_1.default.CreateCsValidation, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new create_controller_1.default().exec(req, res, next); }));
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new list_controller_1.default().exec(req, res, next); }));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new show_controller_1.default().exec(req, res, next); }));
router.patch('/:id', menu_validation_1.default.UpdateCsValidation, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new update_controller_1.default().exec(req, res, next); }));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield new delete_controller_1.default().exec(req, res, next); }));
exports.default = router;
