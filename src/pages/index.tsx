import { Flex, Text } from '@chakra-ui/react';
import { Header, Banner, TravelTypes, Carousel } from 'components';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Flex
        py={['6', '6', '6', '12']}
        w='100%'
        justify='center'
        direction='column'
        align='center'
      >
        <Text fontWeight='semibold' fontSize={['xl', 'xl', 'xl', '4xl']}>
          Vamos nessa?
        </Text>
        <Text fontWeight='semibold' fontSize={['xl', 'xl', 'xl', '4xl']}>
          Então escolha seu continente
        </Text>
      </Flex>
      <Carousel />
    </>
  );
};

export default Home;
