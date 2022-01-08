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
const error_helper_1 = __importDefault(require("../../helper/error.helper"));
const SubMenu = require('../../db/models').tbl_submenu;
class SubMenuCreate extends index_core_1.default {
    constructor() {
        super(SubMenu);
    }
    exec(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = (0, uuid_1.v4)();
                let { menu_id, nama, urutan, icon, url, target, submenu_id } = req.body;
                let request_data = { id, nama, menu_id, urutan, icon, url, target, submenu_id };
                let data = yield SubMenu.create(request_data);
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
exports.default = SubMenuCreate;
