import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Flex
      backgroundImage='/images/background.png'
      as='div'
      w='100%'
      h={['160px', '160px', '335px']}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      py={['7', '7', '20']}
      px={['4', '4', '36']}
      flexDirection='column'
      position='relative'
    >
      <Text as='h1' color='white' fontSize={['xl', 'xl', '4xl']}>
        5 Continentes, <br />
        infinitas possibilidades.
      </Text>
      <Text
        as='p'
        color='white'
        fontSize={['sm', 'sm', 'xl']}
        mt={['2', '2', '5']}
        w={['100%', '55%']}
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
      <Image
        width='400px'
        position='absolute'
        right='20'
        bottom='-10'
        src='/images/airplane.svg'
        alt='Airplane on air with clouds'
        display={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

export default Banner;
