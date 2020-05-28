"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const common_1 = require("@nestjs/common");
const compression = require("compression");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.ApplicationModule, {
        logger: new common_1.Logger('verbose'),
        cors: true
    });
    app.setGlobalPrefix('api/v1');
    app.use(compression());
    await app.listen(3000);
    console.warn(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map