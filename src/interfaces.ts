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
