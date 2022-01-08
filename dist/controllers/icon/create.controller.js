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
const icon_1 = require("../../models/icon");
const uuid_1 = require("uuid");
class CreateIcons extends index_core_1.default {
    constructor() {
        super(icon_1.IconInstance);
    }
    exec(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = (0, uuid_1.v4)();
                let { nama, tag } = req.body;
                let path = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
                let request_data = { id, nama, tag, path };
                let data_response = yield icon_1.IconInstance.create(request_data);
                return res.status(201).json({
                    status: 'success',
                    message: 'data berhasil dibuat',
                    data: data_response
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
exports.default = CreateIcons;
