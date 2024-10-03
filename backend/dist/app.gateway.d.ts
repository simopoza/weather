import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class WeatherGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    sendWeatherUpdates(): void;
    generateWeatherData(): {
        temperature: string;
        wind: string;
        conditions: string;
    };
}
