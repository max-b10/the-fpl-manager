import React from 'react';
import { DotButton } from './CarouselDotButtons';
import { PrevButton, NextButton } from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from '../Cards/CarouselCard';
import { History } from 'lucide-react';
import ButtonClick from '../Animations/ButtonClick';
import { usePrevNextButtons } from './usePrevNextButtons';
import { useDotButton } from './useDotButton';

interface IHistoryCarouselProps {
  slides: {
    total_points: string;
    rank: string;
    season_name: string;
  }[];
}

const HistoryCarousel: React.FC<IHistoryCarouselProps> = ({ slides }) => {
  const options = { loop: false };
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
    <>
      {slides.length > 1 ? (
        <>
          <div className="flex items-center justify-center space-x-4">
            <ButtonClick>
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
            </ButtonClick>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="mt-1 flex justify-center">
                {slides.map((slide, index) => (
                  <div className="flex-none" key={index}>
                    <CarouselCard
                      title={'Season: ' + slide.season_name}
                      icon={<History className="h-5 w-5 text-primary" />}
                      content={slide.total_points}
                      footer={slide.rank}
                    />
                  </div>
                ))}
              </div>
            </div>
            <ButtonClick>
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </ButtonClick>
          </div>

          <div className="mx-auto flex justify-center gap-4">
            <div className="flex items-center justify-center">
              {scrollSnaps.map((_, index) => (
                <ButtonClick key={index}>
                  <DotButton
                    onClick={() => onDotButtonClick(index)}
                    className={`mx-1 inline-flex h-3 w-3 items-center justify-center rounded-full ${
                      index === selectedIndex
                        ? 'ring-2 ring-primary'
                        : 'ring-2 ring-muted'
                    }`}
                  />
                </ButtonClick>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <CarouselCard
            title={'Season: ' + slides[0].season_name}
            icon={<History className="h-6 w-6 text-primary" />}
            content={slides[0].total_points}
            footer={slides[0].rank}
          />
        </div>
      )}
    </>
  );
};

export default HistoryCarousel;
