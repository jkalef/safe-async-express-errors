"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function safe(fn) {
    return (req, res, next) => {
        return fn(req, res, next).catch(next);
    };
}
exports.default = safe;
