import React from 'react';
import { DotButton, useDotButton } from './CarouselDotButtons';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from '../Cards/CarouselCard';
import { CalendarDays } from 'lucide-react';
import { IPast } from '../../types/manager/managerHistory';
import { Card, CardHeader, CardTitle } from '../../UI/organisms/Card';

type HistoryCarouselProps = {
  slides: IPast[];
};

const HistoryCarousel: React.FC<HistoryCarouselProps> = ({ slides }) => {
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
    <Card className="flex min-w-full flex-grow flex-col border border-primary">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
        <div>
          <CardTitle className="flex items-center text-lg">
            Season History
          </CardTitle>
        </div>
      </CardHeader>
      <div className="mt-2 overflow-hidden" ref={emblaRef}>
        <div className="ml-6 flex">
          {slides.map((slide, index) => (
            <div className="w-full flex-none pr-6 md:pr-7" key={index}>
              <CarouselCard
                title={slide.season_name}
                icon={<CalendarDays className="h-6 w-6 text-primary" />}
                totalPoints={slide.total_points}
                rank={slide.rank}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-6 my-3 flex items-start justify-between">
        <div className="grid grid-cols-2 gap-3">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="ml-4 flex flex-wrap space-x-2 space-y-2">
          <div>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`mx-1 inline-flex h-3 w-3 items-center justify-center rounded-full ${
                  index === selectedIndex
                    ? 'ring-2 ring-primary'
                    : 'ring-2 ring-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
    // <>
    //   {slides.length > 1 ? (
    //     <Card className="flex min-w-full flex-grow flex-col border border-primary bg-black">
    //       <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
    //         <div>
    //           <CardTitle className="flex items-center text-lg">
    //             Season History
    //           </CardTitle>
    //         </div>
    //       </CardHeader>
    //       <div className="mt-2 overflow-hidden" ref={emblaRef}>
    //         <div className="ml-6 flex">
    //           {slides.map((slide, index) => (
    //             <div className="w-full flex-none pr-6 md:pr-7" key={index}>
    //               <CarouselCard
    //                 title={slide.season_name}
    //                 icon={<CalendarDays className="h-6 w-6 text-primary" />}
    //                 totalPoints={slide.total_points}
    //                 rank={slide.rank}
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       <div className="mx-6 my-3 flex items-start justify-between">
    //         <div className="grid grid-cols-2 gap-3">
    //           <PrevButton
    //             onClick={onPrevButtonClick}
    //             disabled={prevBtnDisabled}
    //           />
    //           <NextButton
    //             onClick={onNextButtonClick}
    //             disabled={nextBtnDisabled}
    //           />
    //         </div>

    //         <div className="ml-4 flex flex-wrap space-x-2 space-y-2">
    //           <div>
    //             {scrollSnaps.map((_, index) => (
    //               <DotButton
    //                 key={index}
    //                 onClick={() => onDotButtonClick(index)}
    //                 className={`mx-1 inline-flex h-3 w-3 items-center justify-center rounded-full ${
    //                   index === selectedIndex
    //                     ? 'ring-2 ring-primary'
    //                     : 'ring-2 ring-muted'
    //                 }`}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </Card>
    //   ) : (
    //     <Card className="flex min-w-full flex-grow flex-col border border-primary bg-black">
    //       <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
    //         <div>
    //           <CardTitle className="flex items-center text-lg">
    //             Season History
    //           </CardTitle>
    //         </div>
    //       </CardHeader>
    //       <CarouselCard
    //         title={'Season: ' + slides[0].season_name}
    //         icon={<CalendarDays className="h-6 w-6 text-primary" />}
    //         totalPoints={slides[0].total_points}
    //         rank={slides[0].rank}
    //       />
    //     </Card>
    //   )}
    // </>
  );
};

export default HistoryCarousel;
