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
import { ProductsData } from "../Cards";
import { useState } from "react";

interface CardProps {
  product: ProductsData;
}

export default function Card({ product }: CardProps) {
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const activeSizeInfo = product.sizestock[activeSizeIdx];

  return (
    <>
      <Wrapper>
        <span>{product.name}</span>
        <span>{product.category}</span>
        {product.img ? (
          <Image src={product.img} alt="product" />
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
          <span>Стоимость</span>
          <span>{product.price} ₴</span>
        </Flex>
        <Flex column center>
          <span>В наличии</span>
          <span>{activeSizeInfo?.stock} шт.</span>
        </Flex>
        <Flex column center>
          <span>Броней</span>
          <span>{activeSizeInfo?.reserv} шт.</span>
        </Flex>
      </BlockInfo>
    </>
  );
}
