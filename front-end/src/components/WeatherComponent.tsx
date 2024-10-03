import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { io, Socket } from 'socket.io-client';

interface WeatherData {
  temperature: string;
  wind: string;
  conditions: string;
}

const WeatherComponent: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response: AxiosResponse<WeatherData> = await axios.get('http://localhost:3000/weather/current', {
          withCredentials: true,
        });
        setWeather(response.data);
        console.log('Initial weather data:', response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error fetching initial weather data:', axiosError.message);
      }
    };

    fetchWeatherData();

    const socket: Socket = io('http://localhost:3000/weather');

    socket.on('weatherUpdate', (data: WeatherData) => {
      console.log('Received weather update:', data);
      setWeather(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to determine help text based on temperature
  const getTemperatureHelpText = (temp: string) => {
    const temperature = parseFloat(temp);
    if (temperature < 0) {
      return "It's freezing! Dress warmly.";
    } else if (temperature < 10) {
      return "It's quite cold! A coat is recommended.";
    } else if (temperature < 20) {
      return "A bit chilly! Consider a light jacket.";
    } else if (temperature < 30) {
      return "Comfortable weather! Enjoy your day.";
    } else {
      return "It's hot! Stay hydrated.";
    }
  };

  // Function to determine help text based on wind speed
  const getWindHelpText = (wind: string) => {
    const windSpeed = parseFloat(wind);
    if (windSpeed < 10) {
      return "Light breeze, perfect for a walk.";
    } else if (windSpeed < 20) {
      return "Breezy conditions, hold onto your hat!";
    } else if (windSpeed < 30) {
      return "Windy! Make sure to secure loose items.";
    } else {
      return "Strong winds! Stay indoors if possible.";
    }
  };

  if (!weather) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Text fontSize="2xl">Loading weather data...</Text>
      </Flex>
    );
  }

  return (
    <Box maxW="800px" mx="auto" mt="10" p="6" bg="gray.100" borderRadius="md" boxShadow="xl">
      <Text fontSize="3xl" mb="6" fontWeight="bold" textAlign="center">
        Current Weather
      </Text>
      <Flex justify="space-between" align="center">
        <Stat>
          <StatLabel fontSize="lg" color="blue.600">Temperature</StatLabel>
          <StatNumber>{weather.temperature}°C</StatNumber>
          <StatHelpText>{getTemperatureHelpText(weather.temperature)}</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="lg" color="green.600">Wind Speed</StatLabel>
          <StatNumber>{weather.wind} km/h</StatNumber>
          <StatHelpText>{getWindHelpText(weather.wind)}</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="lg" color="orange.600">Conditions</StatLabel>
          <StatNumber>{weather.conditions}</StatNumber>
          <StatHelpText>Enjoy the weather!</StatHelpText>
        </Stat>
      </Flex>
    </Box>
  );
};

export default WeatherComponent;
