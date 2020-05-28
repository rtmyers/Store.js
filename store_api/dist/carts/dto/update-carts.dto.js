"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartsDto = void 0;
const openapi = require("@nestjs/swagger");
class UpdateCartsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: true }, created_at: { required: true, type: () => Date } };
    }
}
exports.UpdateCartsDto = UpdateCartsDto;
//# sourceMappingURL=update-carts.dto.js.map