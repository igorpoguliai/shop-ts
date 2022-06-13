import { useEffect, useMemo, useState } from "react";
import { getRequest } from "../../api";
import Card from "../Card";
import Chips, { ChipItemType } from "../common/Chips";
import Input from "../common/Input";
import { Container, Message, ProductWrapper } from "./styles";
import ProductsSkeleton from "../ProductsSkeleton";
import { ReactComponent as LoupeIcon } from "./icons/loupe.svg";
import { ReactComponent as EyeIcon } from "../Card/icons/eye.svg";
import { IProduct } from "../../interfaces";

export default function Cards() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRequest()
      .then(({ items }) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((err) =>
        alert(
          `${err}\nOops... Перевірте підключення до інтернету або спробуйте оновити цю сторінку`
        )
      );
  }, []);

  const categories = useMemo(() => {
    return Array.from(
      new Set(
        products
          .filter((product) => Boolean(product.category))
          .map((product) => product.category)
      )
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    return activeCategory
      ? products.filter((item) => item.category === activeCategory)
      : products;
  }, [products, activeCategory]);

  const finalProducts = useMemo(() => {
    return filteredProducts.filter((item) => {
      if (value === "") {
        return item;
      } else if (item.name.includes(value)) {
        return item;
      } else {
        return null;
      }
    });
  }, [filteredProducts, value]);

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
        items={categories.map((category) => ({
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
          placeholder={"Введіть артикул..."}
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
