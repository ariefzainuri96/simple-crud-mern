"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
function handleError(error) {
    if (error instanceof Error)
        return error.message;
    return `${error}`;
}
exports.handleError = handleError;
