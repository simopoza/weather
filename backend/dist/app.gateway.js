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
exports.WeatherGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let WeatherGateway = class WeatherGateway {
    handleConnection(client, ...args) {
        console.log('Client connected');
    }
    handleDisconnect(client) {
        console.log('Client disconnected');
    }
    sendWeatherUpdates() {
        setInterval(() => {
            const weatherData = this.generateWeatherData();
            console.log('Sending weather update:', weatherData);
            this.server.emit('weatherUpdate', weatherData);
        }, 30000);
    }
    generateWeatherData() {
        const temperature = (Math.random() * 40).toFixed(2);
        const wind = (Math.random() * 100).toFixed(2);
        const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)];
        return { temperature, wind, conditions };
    }
};
exports.WeatherGateway = WeatherGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], WeatherGateway.prototype, "server", void 0);
exports.WeatherGateway = WeatherGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/weather',
        cors: {
            origin: 'http://localhost:5173',
            credentials: true,
        },
    })
], WeatherGateway);
//# sourceMappingURL=app.gateway.js.map