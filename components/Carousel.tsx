import {
  FC,
  ReactNode,
  ReactElement,
  useState,
  useEffect,
  Children,
  cloneElement,
} from "react";

type ItemProps = {
  children: ReactNode;
  width?: string;
};
type Props = {
  children: ReactElement | ReactElement[];
};
export const CarouselItem: FC<ItemProps> = ({ children, width }) => (
  <div
    className={`carousel-item px-3 md:px-0 inline-flex max-h-[400px] w-[${width}]`}
  >
    {children}
  </div>
);

const Carousel: FC<Props> = ({ children }) => {
  const [index, setIndex] = useState<number>(0);
  const updateIndex = (newIndex: number) => {
    let indexNow = newIndex;
    if (indexNow < 0) {
      indexNow = Children.count(children) - 1;
    } else if (indexNow >= Children.count(children)) {
      indexNow = 0;
    }
    setIndex(indexNow);
    console.log(indexNow);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < Children.count(children) - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="carousel w-[90vw] md:w-[60vw] mx-auto overflow-hidden relative w-1/2">
      <div
        className="prev z-[8] absolute h-8 w-8 grid place-items-center rounded-full text-center left-1 bg-white/70 text-blue-800 md:left-[1vw] top-[50%] -translate-y-1/2 cursor-pointer"
        onClick={() => updateIndex(index - 1)}
      >
        {"<"}
      </div>
      <div
        className="next z-[8] absolute h-8 w-8 grid place-items-center rounded-full text-center right-1 bg-white/70 text-blue-800 md:right-[1vw] top-[50%] -translate-y-1/2 cursor-pointer"
        onClick={() => updateIndex(index + 1)}
      >
        {">"}
      </div>
      <div
        className={`inner whitespace-nowrap transition-transform duration-300 w-full`}
        style={{ transform: `translateX(${index * -100}%)` }}
      >
        {Children.map(children, (child) => {
          return cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
