import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const continents = [
  {
    image:
      'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1804',
    name: 'europe',
    title: 'Europa',
    detail: 'O Continente mais antigo',
  },
  {
    image:
      'https://images.unsplash.com/photo-1535139262971-c51845709a48?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
    name: 'asia',
    title: 'Asia',
    detail: 'O Continente mais lindo',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748',
    name: 'south_america',
    title: 'América do Sul',
    detail: 'O Continente mais quente',
  },
];

const Carousel = () => {
  return (
    <Box py='10' px={['4', '4', '36', '36', '96']}>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className='mySwiper'
      >
        {continents.map((ct) => (
          <SwiperSlide>
            <Box
              w='100%'
              h='450px'
              backgroundSize='cover'
              backgroundPosition='bottom'
              backgroundImage={ct.image}
            >
              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                w='100%'
                h='450px'
                background='blackAlpha.600'
              >
                <Text fontSize={['2xl', '5xl']} fontWeight='bold' color='white'>
                  {ct.title}
                </Text>
                <Text fontSize={['xl', '2xl']} color='white'>
                  {ct.detail}
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
