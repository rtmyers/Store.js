"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const core_1 = require("@nestjs/core");
const health_module_1 = require("../health/health.module");
const carts_module_1 = require("../carts/carts.module");
const mongoose_1 = require("@nestjs/mongoose");
const carts_service_1 = require("../carts/carts.service");
let ApplicationModule = (() => {
    let ApplicationModule = class ApplicationModule {
    };
    ApplicationModule = __decorate([
        common_1.Module({
            imports: [
                health_module_1.HealthModule,
                carts_module_1.CartsModule,
                mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/db', { useNewUrlParser: true }),
                common_1.CacheModule.register({
                    max: 5,
                    ttl: 10,
                }),
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                }),
                common_1.HttpModule.registerAsync({
                    useFactory: () => ({
                        timeout: 5000,
                        maxRedirects: 5,
                    }),
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: common_1.CacheInterceptor,
                },
                carts_service_1.CartsService
            ],
        })
    ], ApplicationModule);
    return ApplicationModule;
})();
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map