import { Carousel } from "@material-tailwind/react";
import add from "../assets/add.png";
import add2 from "../assets/add2.png";
import add3 from "../assets/add3.png";

const CarouselCustomNavigation = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
            <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <img
                    src={add}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src={add2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src={add3}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    );
}

export default CarouselCustomNavigation;