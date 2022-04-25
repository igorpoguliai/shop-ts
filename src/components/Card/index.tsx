import {
  Wrapper,
  EmptyImage,
  ChipsWrapper,
  Description,
  Image,
  BlockInfo,
} from "./styles";
import { Flex } from "../common/styles";
import { ReactComponent as EyeIcon } from "./icons/eye.svg";
import Chips from "../common/Chips";
import { IProduct } from "../Cards";
import { useState } from "react";

interface CardProps {
  product: IProduct;
}

export default function Card({ product }: CardProps) {
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const activeSizeInfo = product.sizestock[activeSizeIdx];

  function isImageSrcCorrect(src: string) {
    return src.includes("jpg");
  }

  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <ChipsWrapper>
        {product.sizestock.map((item, index) => (
          <Chips
            key={item.size}
            handleClick={() => setActiveSizeIdx(index)}
            isActive={item.size === activeSizeInfo?.size}
          >
            {item.size}
          </Chips>
        ))}
      </ChipsWrapper>
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
    </>
  );
}
