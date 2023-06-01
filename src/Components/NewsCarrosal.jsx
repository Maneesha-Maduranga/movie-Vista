import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';
import HighlightCard from './HighlightCard';

function NewsCarrosal() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard width='500px' />
      </SwiperSlide>
    </Swiper>
  );
}

export default NewsCarrosal;
