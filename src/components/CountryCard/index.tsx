import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface ICountryCardProps {
  country: string;
  flag: string;
  city: string;
  image: string;
}

const CountryCard = ({ city, country, flag, image }: ICountryCardProps) => {
  return (
    <Box w='256px' h='280px'>
      <Image
        w='100%'
        objectFit='cover'
        h='173px'
        src={image}
        alt={`Image of city ${city} `}
      />
      <Box pb='5' w='100%' border='1px solid #FFBA08' h='106px'>
        <Flex px='6' py='18px' justify='space-between'>
          <Flex direction='column'>
            <Text fontWeight='bold'>{city}</Text>
            <Text>{country}</Text>
          </Flex>
          <Image
            w='30px'
            h='30px'
            borderRadius='100%'
            objectFit='cover'
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flag}.svg`}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default CountryCard;
