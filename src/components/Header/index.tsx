import { Flex, Box, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdArrowBackIosNew } from 'react-icons/md';
import Link from 'next/link';

const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex
      as='header'
      w='100%'
      py='7'
      background='white'
      justifyContent='center'
      align='center'
      position='relative'
    >
      {asPath !== '/' && (
        <Link href='/'>
          <Box position='absolute' left='10'>
            <Icon cursor='pointer' as={MdArrowBackIosNew} />
          </Box>
        </Link>
      )}
      <img src='/images/logo.png' alt='Text write WorldTrip with a airplane' />
    </Flex>
  );
};

export default Header;
