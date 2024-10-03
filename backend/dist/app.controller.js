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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
const common_1 = require("@nestjs/common");
let WeatherController = class WeatherController {
    getCurrentWeather() {
        console.log("hello");
        const weatherData = this.generateWeatherData();
        return weatherData;
    }
    generateWeatherData() {
        const temperature = (Math.random() * 40).toFixed(2);
        const wind = (Math.random() * 100).toFixed(2);
        const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)];
        return { temperature, wind, conditions };
    }
};
exports.WeatherController = WeatherController;
__decorate([
    (0, common_1.Get)('current'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WeatherController.prototype, "getCurrentWeather", null);
exports.WeatherController = WeatherController = __decorate([
    (0, common_1.Controller)('weather')
], WeatherController);
//# sourceMappingURL=app.controller.js.map