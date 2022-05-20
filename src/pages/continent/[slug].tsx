import { Box, Flex, Text } from '@chakra-ui/react';
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
      {console.log(continentInfo)}
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
