import { Box, Flex, Image, Text, Divider } from '@chakra-ui/react';

const travelTypesObject = [
  {
    text: 'Vida norturna',
    img: '/images/cocktail.svg',
    alt: 'Imagem de um cocktail',
  },
  {
    text: 'Praia',
    img: '/images/surf.svg',
    alt: 'Imagem de uma praia',
  },
  {
    text: 'Moderno',
    img: '/images/building.svg',
    alt: 'Imagem de um prédio',
  },
  {
    text: 'Clássico',
    img: '/images/museum.svg',
    alt: 'Imagem de um museu',
  },
  {
    text: 'e mais...',
    img: '/images/earth.svg',
    alt: 'Imagem de um planeta',
  },
];

const TravelTypes = () => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        py={['7', '7', '20']}
        px={['4', '4', '36', '36', '96']}
        w='100%'
      >
        <Flex justify='space-between' w='100%'>
          {travelTypesObject.map((obj) => (
            <Flex direction='column' align='center'>
              <Image src={obj.img} alt={obj.alt} />
              <Text mt='6' size='xl' fontWeight='semibold'>
                {obj.text}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default TravelTypes;
