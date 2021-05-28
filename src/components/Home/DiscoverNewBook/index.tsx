import { useMediaQuery } from "@chakra-ui/media-query";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import DiscoverNewBookCard from "./Card";
import { books } from "./mock";

const DiscoverNewBook = () => {
  const colors = ["#00173D", "#451475"];
  const [isMobile] = useMediaQuery("(max-width: 425px)");

  return (
    <CarouselProvider
      naturalSlideWidth={180}
      naturalSlideHeight={95}
      visibleSlides={isMobile ? 1.25 : 5}
      totalSlides={isMobile ? 2 : 5}
    >
      <Slider>
        {books.map((book, index) => (
          <Slide key={book.id} index={index}>
            <DiscoverNewBookCard
              id={book.id}
              authorName={book.volumeInfo.authors[0]}
              bookName={book.volumeInfo.title}
              raiting={120}
              bookCoverImage={book.volumeInfo.imageLinks.thumbnail}
              color={colors[index]}
            />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default DiscoverNewBook;
