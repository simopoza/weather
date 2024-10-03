// import React from 'react';
// import { Flex } from '@chakra-ui/react';
// import WeatherComponent from './components/WeatherComponent';

// const App: React.FC = () => {
//   return (
//     <Flex
//       justify="center"
//       align="center"
//       height="100vh"
//       bg="gray.50"
//     >
//       <WeatherComponent />
//     </Flex>
//   );
// };

// export default App;

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
