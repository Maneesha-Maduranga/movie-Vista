import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Navigation } from 'swiper';
import HighlightCard from './HighlightCard';

function NewsCarrosal() {
  return (
    <Swiper
      slidesPerView={6}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[FreeMode]}
      className='mySwiper'
    >
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightCard />
      </SwiperSlide>
    </Swiper>
  );
}

export default NewsCarrosal;
