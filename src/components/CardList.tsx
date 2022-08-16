import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImgUrl, setCurrentImageUrl] = useState('');

  const handleViewImage = (url: string): void => {
    onOpen();
    setCurrentImageUrl(url);
  };

  return (
    <SimpleGrid columns={3} gap="40px">
      {cards?.map(card => (
        <Card data={card} viewImage={handleViewImage} key={card.id} />
      ))}

      <ModalViewImage
        imgUrl={currentImgUrl}
        isOpen={isOpen}
        onClose={onClose}
      />
    </SimpleGrid>
  );
}
