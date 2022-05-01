import {
  CardWrapper,
  EmptyImage,
  Description,
  Image,
  BlockInfo,
} from "./styles";
import { Flex } from "../common/styles";
import { ReactComponent as EyeIcon } from "./icons/eye.svg";
import Chips, { ChipItemType } from "../common/Chips";
import { IProduct } from "../Cards";
import { useState } from "react";

interface CardProps {
  product: IProduct;
}

function isImageSrcCorrect(src: string) {
  return src.includes("jpg");
}

export default function Card({ product }: CardProps) {
  const [activeSizeIdx, setActiveSizeIdx] = useState<number>(0);
  const activeSizeInfo = product.sizestock[activeSizeIdx];

  function handleChipClick(item: ChipItemType) {
    setActiveSizeIdx(item.value as number);
  }

  const chipItems = product.sizestock.map((item, index) => ({
    value: index,
    label: item.size,
  }));

  return (
    <CardWrapper>
      <span>{product.name}</span>
      <span>{product.category}</span>
      {product.img && isImageSrcCorrect(product.img) ? (
        <Image src={product.img} loading="lazy" alt="product" />
      ) : (
        <EmptyImage>
          <EyeIcon />
          <span>NO IMAGE</span>
        </EmptyImage>
      )}
      <Chips
        items={chipItems}
        onClick={handleChipClick}
        activeValue={activeSizeIdx}
      />
      <Description>{product.description}</Description>
      <BlockInfo between>
        <Flex column center>
          <span>Ціна</span>
          <span>{product.price} ₴</span>
        </Flex>
        <Flex column center>
          <span>В наявності</span>
          <span>{activeSizeInfo?.stock || 0} шт.</span>
        </Flex>
        <Flex column center>
          <span>Броней</span>
          <span>{activeSizeInfo?.reserv || 0} шт.</span>
        </Flex>
      </BlockInfo>
    </CardWrapper>
  );
}
