"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const carts_service_1 = require("./carts.service");
const update_carts_dto_1 = require("./dto/update-carts.dto");
let CartsController = (() => {
    let CartsController = class CartsController {
        constructor(cartService) {
            this.cartService = cartService;
        }
        getCarts(id) {
            return this.cartService.findById(id);
        }
        async update(id, updateCartsDto) {
            console.log("updateCarts", updateCartsDto);
            const result = await this.cartService.add(id, updateCartsDto['items']);
            console.log("WATWATED", result);
            return updateCartsDto;
        }
    };
    __decorate([
        common_1.Get(),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Query('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], CartsController.prototype, "getCarts", null);
    __decorate([
        common_1.Patch(':id'),
        openapi.ApiResponse({ status: 200, type: require("./dto/update-carts.dto").UpdateCartsDto }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_carts_dto_1.UpdateCartsDto]),
        __metadata("design:returntype", Promise)
    ], CartsController.prototype, "update", null);
    CartsController = __decorate([
        common_1.Controller('carts'),
        __metadata("design:paramtypes", [carts_service_1.CartsService])
    ], CartsController);
    return CartsController;
})();
exports.CartsController = CartsController;
//# sourceMappingURL=carts.controller.js.map