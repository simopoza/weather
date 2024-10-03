import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  namespace: '/weather',
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
  },
})
export class WeatherGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: any, ...args: any[]) {
    console.log('Client connected');
  }

  handleDisconnect(client: any) {
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
}
