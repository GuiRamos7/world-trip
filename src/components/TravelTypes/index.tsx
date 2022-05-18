import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';

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
  const variant = useBreakpointValue({ base: false, lg: true });

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
        <Flex
          justify={['start', 'start', 'space-between']}
          wrap={['wrap', 'wrap', 'nowrap']}
          w='100%'
        >
          {travelTypesObject.map((obj) => (
            <Flex
              key={obj.text.split(' ').join('-')}
              direction='column'
              align='center'
            >
              {variant && <Image src={obj.img} alt={obj.alt} />}
              <Flex mt='6' align='center'>
                {!variant && (
                  <Icon as={BsDot} color='yellow.500' fontSize='40' />
                )}
                <Text size='xl' fontWeight='semibold' position='relative'>
                  {obj.text}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default TravelTypes;
