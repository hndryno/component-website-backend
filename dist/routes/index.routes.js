"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const information_routes_1 = __importDefault(require("./information.routes"));
const menu_routes_1 = __importDefault(require("./menu.routes"));
const submenu_routes_1 = __importDefault(require("./submenu.routes"));
const kategori_routes_1 = __importDefault(require("./kategori.routes"));
const artikel_routes_1 = __importDefault(require("./artikel.routes"));
const testing_routes_1 = __importDefault(require("./testing.routes"));
const api = `/api/v1`;
const router = (app) => {
    app.use(`${api}/menu`, menu_routes_1.default);
    app.use(`${api}/submenu`, submenu_routes_1.default);
    app.use(`${api}/information`, information_routes_1.default);
    app.use(`${api}/kategori`, kategori_routes_1.default);
    app.use(`${api}/artikel`, artikel_routes_1.default);
    // app.use(`${api}/icon`, iconApi)
    app.use(`${api}/testing`, testing_routes_1.default);
};
exports.default = router;
