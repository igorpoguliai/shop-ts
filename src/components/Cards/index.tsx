import { useEffect, useState } from "react";
import { getRequest } from "../../api";
import Card from "../Card";
import Chips from "../common/Chips";
import Input from "../common/Input";
import { ChipsWrapper, ProductWrapper } from "./styles";
import ProductsSkeleton from "../ProductsSkeleton";
import { ReactComponent as LoupeIcon } from "./icons/loupe.svg";

export interface IProduct {
  category: string;
  sizestock: ISize[];
  description: string;
  name: string;
  img: string;
  price: string;
}

export interface ISize {
  size: string;
  stock: string;
  reserv: string;
}

export default function Cards() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRequest().then(({ items }) => {
      setProducts(items);
      setLoading(false);
    });
  }, []);

  const categories = Array.from(
    new Set(products.map((product) => product.category).filter(Boolean))
  );

  const filtredProducts = activeCategory
    ? products.filter((item) => item.category === activeCategory)
    : products;

  function handleCategoryClick(category: string) {
    setActiveCategory(category === activeCategory ? null : category);
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return loading ? (
    <ProductsSkeleton />
  ) : (
    <>
      <ChipsWrapper>
        {categories.map((category) => (
          <Chips
            key={category}
            handleClick={() => handleCategoryClick(category)}
            isActive={category === activeCategory}
          >
            {category}
          </Chips>
        ))}
      </ChipsWrapper>
      <ProductWrapper>
        <Input
          onChange={handleChangeInput}
          value={value}
          text={"Введіть артикул..."}
          Icon={LoupeIcon}
        />
        {filtredProducts.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </ProductWrapper>
    </>
  );
}
