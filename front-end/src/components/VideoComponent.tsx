import React from 'react';
import { Box } from '@chakra-ui/react';

const VideoComponent: React.FC = () => {
  return (
    <Box mt="10" borderRadius="md" overflow="hidden" boxShadow="xl">
      <iframe
        width="100%"
        height="500" // Increased height for a bigger video size
        src="https://www.youtube.com/embed/H1zwMNetzJo?si=8zBLgLt-pHcqTFYF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Box>
  );
};

export default VideoComponent;
