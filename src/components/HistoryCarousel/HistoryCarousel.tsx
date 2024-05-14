import React from 'react';
import { DotButton, useDotButton } from './CarouselDotButtons';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

type HistoryCarouselProps = {
  slides: {
    total_points: string;
    rank: string;
    season_name: string;
  }[];
};

const HistoryCarousel: React.FC<HistoryCarouselProps> = ({ slides }) => {
  const options = { loop: false }; // define your options here
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="mx-auto max-w-4xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="ml-[-4rem] flex">
          {slides.map((slide, index) => (
            <div className="w-[70%] min-w-0 flex-none pl-4" key={index}>
              <div className="flex h-[19rem] items-center justify-center rounded-xl text-4xl font-semibold shadow-inner">
                {slide.total_points}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-[auto,1fr] justify-between gap-3">
        <div className="grid grid-cols-2 items-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="mr-[-0.6rem] flex flex-wrap items-center justify-end">
          {scrollSnaps.map((_, index: number) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                index === selectedIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryCarousel;
