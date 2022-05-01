import { useEffect, useMemo, useState } from "react";
import { getRequest } from "../../api";
import Card from "../Card";
import Chips, { ChipItemType } from "../common/Chips";
import Input from "../common/Input";
import { Container, Message, ProductWrapper } from "./styles";
import ProductsSkeleton from "../ProductsSkeleton";
import { ReactComponent as LoupeIcon } from "./icons/loupe.svg";
import { ReactComponent as EyeIcon } from "../Card/icons/eye.svg";

export interface IProduct {
  category: string;
  sizestock: ISize[];
  description: string;
  name: string;
  img: string;
  price: string;
}

interface ISize {
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
    getRequest()
      .then(({ items }) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  const categories = useMemo(() => {
    Array.from(
      new Set(
        products
          .filter((product) => Boolean(product.category))
          .map((product) => product.category)
      )
    );
  }, [products]);

  const filtredProducts = useMemo(() => {
    return activeCategory
      ? products.filter((item) => item.category === activeCategory)
      : products;
  }, [categories]);

  const finalProducts = filtredProducts.filter((item) => {
    if (value === "") {
      return item;
    } else if (item.name.includes(value)) {
      return item;
    } else {
      return null;
    }
  });

  function handleCategoryClick(item: ChipItemType) {
    setActiveCategory(
      item.value === activeCategory ? null : (item.value as string)
    );
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return loading ? (
    <ProductsSkeleton />
  ) : (
    <Container>
      <Chips
        items={categories.map((category: string) => ({
          value: category,
          label: category,
        }))}
        activeValue={activeCategory}
        onClick={handleCategoryClick}
      />
      <ProductWrapper>
        <Input
          onChange={handleChangeInput}
          value={value}
          text={"Введіть артикул..."}
          Icon={LoupeIcon}
        />
        {finalProducts.length === 0 ? (
          <Message>
            <EyeIcon />
            Товар з таким артикулем не знайдено...
          </Message>
        ) : (
          finalProducts.map((product) => (
            <Card key={product.name} product={product} />
          ))
        )}
      </ProductWrapper>
    </Container>
  );
}
