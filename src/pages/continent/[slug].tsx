import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Header } from 'components';
import { GetServerSideProps } from 'next';

interface ICountries {
  country: string;
  flag: string;
  city: string;
  image: string;
}

type ContinentInfo = {
  title: string;
  bio: string;
  number_countries: number;
  languages: number;
  cities: number;
  background: string;
  countries: Array<ICountries>;
};

interface ContinentProps {
  continentInfo: ContinentInfo;
}

const Continent = ({ continentInfo }: ContinentProps) => {
  return (
    <>
      <Header />
      <Flex
        backgroundImage={continentInfo.background}
        backgroundSize='cover'
        bgPosition='bottom'
        w='100%'
        h={['150px', '200px', '500px']}
        px={[0, 0, 36]}
        py='16'
        flexDirection='column-reverse'
        align={['center', 'center', 'flex-start']}
        justify={['center', 'center', 'flex-start']}
      >
        <Text fontWeight='bold' color='white' fontSize={['2xl', '2xl', '5xl']}>
          Europa
        </Text>
      </Flex>

      <Flex
        mt={['6', '6', '20']}
        px={['4', '4', '36']}
        direction={['column', 'column', 'row']}
        justify={['initial', 'initial', 'space-between']}
      >
        <Text
          textAlign='justify'
          w={['100%', '100%', '40%']}
          mb={['3', '3', '0']}
        >
          {continentInfo.bio}
        </Text>
        <Grid
          w={['100%', '100%', '47%']}
          templateColumns='repeat(3, 1fr)'
          gap='10'
        >
          <Flex
            direction='column'
            align={['flex-start', 'flex-start', 'center']}
          >
            <Text
              fontWeight='bold'
              fontSize={['2xl', '2xl', '5xl']}
              color='yellow.500'
            >
              {continentInfo.number_countries}
            </Text>
            <Text fontWeight='bold'>países</Text>
          </Flex>
          <Flex
            direction='column'
            align={['flex-start', 'flex-start', 'center']}
          >
            <Text
              fontWeight='bold'
              fontSize={['2xl', '2xl', '5xl']}
              color='yellow.500'
            >
              {continentInfo.number_countries}
            </Text>
            <Text fontWeight='bold'>línguas</Text>
          </Flex>
          <Flex
            direction='column'
            align={['flex-start', 'flex-start', 'center']}
          >
            <Text
              fontWeight='bold'
              fontSize={['2xl', '2xl', '5xl']}
              color='yellow.500'
            >
              {continentInfo.number_countries}
            </Text>
            <Text fontWeight='bold'>cidades +100 </Text>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await axios
    .get(`http://localhost:3000/${params?.slug}`)
    .then((el) => el);

  return {
    props: {
      continentInfo: data,
    },
    redirect: 60 * 60 * 24, // 24 Hours
  };
};
export default Continent;
