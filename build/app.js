"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./Router/index"));
//config import
const connectDB_1 = require("./config/connectDB");
//config views
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views/'));
//config public
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//
(0, connectDB_1.connect)();
app.use('/', index_1.default);
app.listen(3000, () => {
    console.log('sever runing okkk !!!');
});
