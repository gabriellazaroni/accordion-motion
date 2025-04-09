import { AnimatePresence } from "framer-motion";
import { GalleryWrapper, InfoContainer, ItemsRow, MotionDescription, MotionImage, MotionItem, MotionTitle } from "./styles";
import { Item } from "../../data/data";

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

interface GalleryProps {
  items: Item[];
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number | undefined;
}

export function Gallery({ items, setIndex, index }: GalleryProps) {
  return (
    <GalleryWrapper>
      <ItemsRow>
        {items.slice(0, 7).map((item, i) => (

          <MotionItem
            key={i}
            active={index === i}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setIndex(i)}
          >
            <MotionImage src={item.url} active={index === i} />
          </MotionItem>
        ))}
      </ItemsRow>
      <AnimatePresence mode="wait">
        {index !== undefined && (
          <InfoContainer
            key={items[index].id}
            variants={article}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <MotionTitle variants={article}>{items[index].title}</MotionTitle>
            <MotionDescription variants={article}>
              {items[index].description}
            </MotionDescription>
          </InfoContainer>
        )}
      </AnimatePresence>
    </GalleryWrapper>
  );
}