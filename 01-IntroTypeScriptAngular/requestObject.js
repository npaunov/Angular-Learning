"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestObject = /** @class */ (function () {
    function RequestObject(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return RequestObject;
}());
exports.default = RequestObject;
//# sourceMappingURL=requestObject.js.map