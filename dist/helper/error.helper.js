"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reportError = (err, message) => {
    if (err instanceof Error)
        message = err.message;
    return message;
};
exports.default = reportError;
