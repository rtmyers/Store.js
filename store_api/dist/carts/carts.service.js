"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
let CartsService = (() => {
    let CartsService = class CartsService {
        constructor() {
            this.carts = [];
        }
        find() {
            return this.carts;
        }
        findById(id) {
            return this.find().filter(c => c.id === id);
        }
        create(cart) {
            this.carts.push(cart);
        }
        add(id, cartIn) {
            return new Promise(res => {
                this.carts.push(cartIn);
                res({ items: [...this.carts] });
            });
        }
        remove(id) {
            return new Promise(resolve => {
                const index = this.carts.findIndex(cart => cart.id === id);
                this.carts.splice(1, index);
                resolve(this.carts);
            });
        }
    };
    CartsService = __decorate([
        common_1.Injectable()
    ], CartsService);
    return CartsService;
})();
exports.CartsService = CartsService;
//# sourceMappingURL=carts.service.js.map