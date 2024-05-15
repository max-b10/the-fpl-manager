import React from 'react';
import { DotButton, useDotButton } from './CarouselDotButtons';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from '../Cards/CarouselCard';
import { History } from 'lucide-react';

type HistoryCarouselProps = {
  slides: {
    total_points: string;
    rank: string;
    season_name: string;
  }[];
};

const HistoryCarousel: React.FC<HistoryCarouselProps> = ({ slides }) => {
  const options = { loop: true };
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
    <section className="mx-auto max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[36rem]">
      {slides.length > 1 ? (
        <>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  className="mx-8 w-full min-w-0 flex-none pl-4 sm:pl-0"
                  key={index}
                >
                  <CarouselCard
                    title={'Season: ' + slide.season_name}
                    icon={<History className="h-6 w-6 text-primary" />}
                    content={slide.total_points}
                    footer={slide.rank}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-[auto,1fr] gap-4">
            <div className="grid grid-cols-2 items-center justify-between gap-3">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>

            <div className="flex flex-wrap items-center justify-end">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={` mx-1 inline-flex h-3 w-3 items-center justify-center rounded-full ${
                    index === selectedIndex
                      ? 'ring-2 ring-primary'
                      : 'ring-2 ring-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="mx-auto w-full min-w-0 flex-none pl-4 sm:pl-0">
          <CarouselCard
            title={'Season: ' + slides[0].season_name}
            icon={<History className="h-6 w-6 text-primary" />}
            content={slides[0].total_points}
            footer={slides[0].rank}
          />
        </div>
      )}
    </section>
  );
};

export default HistoryCarousel;
