import { useEffect, useState } from "react";
import { getRequest } from "../../api";
import Card from "../Card";
import Chips from "../common/Chips";
import Input from "../common/Input";
import { ChipsWrapper, ProductWrapper } from "./styles";
import MyLoader from "../MyLoader";

export interface ProductsData {
  category: string;
  sizestock: { size: string; stock: string; reserv: string }[];
  description: string;
  name: string;
  img: string;
  price: string;
}

export default function Cards() {
  const [products, setProducts] = useState<Array<ProductsData>>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [value, setValue] = useState<string | number>("");

  useEffect(() => {
    getRequest().then(({ items }) => setProducts(items));
  }, []);

  const categories = Array.from(
    new Set(
      products
        .map((product) => product.category)
        .filter((category) => category !== "")
    )
  );

  const filterProductToCategory = activeCategory
    ? products.filter((item) => item.category === activeCategory)
    : products;

  function handleCategoryClick(category: string) {
    setActiveCategory(category === activeCategory ? null : category);
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <>
      {products.length ? (
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
              text={"Введите артикул..."}
            />
            {filterProductToCategory.map((product) => (
              <Card key={product.name} product={product} />
            ))}
          </ProductWrapper>
        </>
      ) : (
        <MyLoader />
      )}
    </>
  );
}
