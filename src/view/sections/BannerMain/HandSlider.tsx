import 'swiper/css';
import handMobile from '@/assets/img/mokups/hand-mobile-2.png';
import { HandImage, SliderBanner } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import configMain from '@/config/main';

const HandSlider = () => {
  return (
    <HandImage>
      <SliderBanner>
        <Swiper 
        loop 
        autoplay={{ delay: 2500, disableOnInteraction: true }} 
        modules={[Autoplay]}>
          {configMain.worksSlider.map(work => (
            <SwiperSlide key={work.id}>
              <img src={work.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderBanner>
      <img src={handMobile} />
    </HandImage>
  );
};

export default HandSlider;
