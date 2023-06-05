import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Navigation } from 'swiper';
import HighlightCard from './HighlightCard';
import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';
import useFetchData from '../Hooks/useFecthData';
import { toUnitless } from '@mui/material/styles/cssUtils';
import Spinner from './Spinner';

function NewsCarrosal() {
  const [movies, loading] = useFetchData('upcoming', 1);

  const localMv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          440: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className='mySwiper'
      >
        {loading ? (
          <>
            {localMv.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box sx={{ m: 1 }}>
                    <Spinner width={200} height={350} />
                  </Box>
                </SwiperSlide>
              );
            })}
          </>
        ) : (
          <>
            {movies.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box sx={{ m: 1 }}>
                    <HighlightCard
                      title={item.title}
                      date={item.release_date}
                      vote={item.vote_average}
                      img={item.poster_path}
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
          </>
        )}
      </Swiper>
    </>
  );
}

export default NewsCarrosal;
