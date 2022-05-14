import { Flex, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdArrowBackIosNew } from 'react-icons/md';

const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex
      w='100%'
      py='7'
      background='white'
      justifyContent='center'
      align='center'
      position='relative'
    >
      {asPath !== '/' && (
        <Box position='absolute' left='10'>
          <MdArrowBackIosNew />
        </Box>
      )}
      <img src='/images/logo.png' alt='Text write WorldTrip with a airplane' />
    </Flex>
  );
};

export default Header;
