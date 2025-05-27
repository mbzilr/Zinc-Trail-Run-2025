import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwiperComponentProps {
  images: string[];
  altPrefix?: string;
  loop?: boolean;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ images, altPrefix = 'Slide', loop = false }) => {
  const swiperRef = useRef<any>(null);

  // Custom navigation logic for jump-to-first/last
  const handlePrev = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.isBeginning && !loop) {
      swiperRef.current.slideTo(images.length - 1);
    } else {
      swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.isEnd && !loop) {
      swiperRef.current.slideTo(0);
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        loop={loop}
        className="w-full h-full"
        style={{ maxWidth: '100%', maxHeight: '840px', borderRadius: '1rem' }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`${altPrefix} ${idx + 1}`}
              className="w-full aspect-[1/2] md:aspect-auto h-[512px] md:h-[1024px] object-cover rounded-lg"
              style={{ margin: '0 auto' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation controls */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-cyan-400 hover:bg-cyan-400/70 text-white rounded-md w-10 h-10 flex items-center justify-center shadow transition"
        onClick={handlePrev}
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-cyan-400 hover:bg-cyan-400/70 text-white rounded-md w-10 h-10 flex items-center justify-center shadow transition"
        onClick={handleNext}
        aria-label="Next slide"
        type="button"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default SwiperComponent;

// Swiper custom styles for pagination bullets
const style = document.createElement('style');
style.innerHTML = `
.swiper-pagination-bullet {
  background: #22d3ee !important;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  background: #22d3ee !important;
  opacity: 1;
}
`;
document.head.appendChild(style);
