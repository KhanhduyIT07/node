"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const indexSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
});
const User = (0, mongoose_1.model)('User', indexSchema);
exports.default = User;
