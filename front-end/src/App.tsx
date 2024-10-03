import React from 'react';
import { Flex } from '@chakra-ui/react';
import WeatherComponent from './components/WeatherComponent';

const App: React.FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      bg="gray.50"
    >
      <WeatherComponent />
    </Flex>
  );
};

export default App;
