import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import WeatherComponent from './components/WeatherComponent';
import VideoComponent from './components/VideoComponent';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box p="4">
        <WeatherComponent />
        <VideoComponent />
      </Box>
    </ChakraProvider>
  );
};

export default App;
