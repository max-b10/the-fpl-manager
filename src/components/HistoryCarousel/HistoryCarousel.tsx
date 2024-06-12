import React from 'react';
import { DotButton } from './CarouselDotButtons';
import { PrevButton, NextButton } from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from '../Cards/CarouselCard';
import { History } from 'lucide-react';
import ButtonClick from '../Animations/ButtonClick';
import { usePrevNextButtons } from './usePrevNextButtons';
import { useDotButton } from './useDotButton';
import { Card, CardContent } from '../../UI/organisms/Card';
import { IPast } from '../../types/manager/managerHistory';

interface IHistoryCarouselProps {
  slides: IPast[];
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
      <Card className="flex min-w-full flex-grow flex-col border border-primary pt-6">
        <CardContent>
          {slides.length > 1 ? (
            <>
              <div
                className="flex items-center justify-center overflow-hidden"
                ref={emblaRef}
              >
                <div className="mb-2 flex justify-center">
                  {slides.map((slide, index) => (
                    <div className="flex-none" key={index}>
                      <CarouselCard
                        key={index}
                        title={slide.season_name}
                        icon={<History className="h-5 w-5 text-primary" />}
                        totalPoints={slide.total_points}
                        rank={slide.rank}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <ButtonClick>
                    <PrevButton
                      onClick={onPrevButtonClick}
                      disabled={prevBtnDisabled}
                    />
                  </ButtonClick>
                  <ButtonClick>
                    <NextButton
                      onClick={onNextButtonClick}
                      disabled={nextBtnDisabled}
                    />
                  </ButtonClick>
                </div>
                <div className="flex w-full items-center justify-end gap-4">
                  {scrollSnaps.map((_, index) => (
                    <ButtonClick key={index}>
                      <DotButton
                        onClick={() => onDotButtonClick(index)}
                        className={`-mx-1 h-2 w-2 items-center justify-center rounded-full ${
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
                title={slides[0].season_name}
                icon={<History className="h-6 w-6 text-primary" />}
                totalPoints={slides[0].total_points}
                rank={slides[0].rank}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default HistoryCarousel;
