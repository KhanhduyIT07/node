"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = __importDefault(require("../Controllers/index_controllers"));
const router = (0, express_1.Router)();
router.get('/', index_controllers_1.default.index);
exports.default = router;
