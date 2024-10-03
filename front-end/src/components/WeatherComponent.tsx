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

  if (!weather) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Text fontSize="2xl">Loading weather data...</Text>
      </Flex>
    );
  }

  return (
    <Box maxW="400px" mx="auto" mt="10" p="6" bg="gray.100" borderRadius="md" boxShadow="xl">
      <Text fontSize="3xl" mb="6" fontWeight="bold" textAlign="center">
        Current Weather
      </Text>
      <Stat>
        <StatLabel fontSize="lg" color="blue.600">Temperature</StatLabel>
        <StatNumber>{weather.temperature}°C</StatNumber>
        <StatHelpText>Feels like a warm day!</StatHelpText>
      </Stat>

      <Stat mt="4">
        <StatLabel fontSize="lg" color="green.600">Wind Speed</StatLabel>
        <StatNumber>{weather.wind} km/h</StatNumber>
        <StatHelpText>Breezy conditions</StatHelpText>
      </Stat>

      <Stat mt="4">
        <StatLabel fontSize="lg" color="orange.600">Conditions</StatLabel>
        <StatNumber>{weather.conditions}</StatNumber>
        <StatHelpText>Enjoy the weather!</StatHelpText>
      </Stat>
    </Box>
  );
};

export default WeatherComponent;
