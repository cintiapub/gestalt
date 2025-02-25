// @flow strict
import { type Node as ReactNode } from 'react';
import { Box, Collage, Flex, Image, Mask, Text } from 'gestalt';

const images = [
  {
    color: 'rgb(111, 91, 77)',
    naturalHeight: 751,
    naturalWidth: 564,
    src: 'https://i.ibb.co/Lx54BCT/stock1.jpg',
  },
  {
    color: 'rgb(231, 186, 176)',
    naturalHeight: 200,
    naturalWidth: 98,
    src: 'https://i.ibb.co/7bQQYkX/stock2.jpg',
  },
  {
    color: '#000',
    naturalHeight: 300,
    naturalWidth: 200,
    src: 'https://i.ibb.co/d0pQsJz/stock3.jpg',
  },
  {
    color: '#000',
    naturalHeight: 517,
    naturalWidth: 564,
    src: 'https://i.ibb.co/SB0pXgS/stock4.jpg',
  },
  {
    color: '#000',
    naturalHeight: 806,
    naturalWidth: 564,
    src: 'https://i.ibb.co/jVR29XV/stock5.jpg',
  },
  {
    color: '#000',
    naturalHeight: 200,
    naturalWidth: 200,
    src: 'https://i.ibb.co/FY2MKr5/stock6.jpg',
  },
];

export default function Example(): ReactNode {
  return (
    <Flex alignItems="center" height="100%" justifyContent="center" width="100%">
      <Flex gap={12} wrap>
        {[2, 3, 4].map((columns) => (
          <Box key={columns}>
            <Box>
              <Text>columns = {columns}</Text>
            </Box>

            <Collage
              columns={columns}
              height={150}
              width={150}
              renderImage={({ index, width, height }) => {
                const image = images[index] || {};
                return (
                  <Mask wash width={width} height={height}>
                    {image.src ? (
                      <Image
                        alt="collage image"
                        color={image.color}
                        fit="cover"
                        naturalHeight={image.naturalHeight}
                        naturalWidth={image.naturalWidth}
                        src={image.src}
                      />
                    ) : (
                      <Box color="secondary" height={height} width={width} />
                    )}
                  </Mask>
                );
              }}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
