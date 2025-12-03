import { ListPrice } from "@/core/domain";
import { CardContainer } from "../../atoms";
import { InfoRow } from "../../molecules";

interface Product {
  id: string;
  name: string;
  listPrices: ListPrice[];
  stock: number;
}

interface Props {
  product: Product;
}

export const ProductCard = ({  product}: Props) => {
  return (
    <CardContainer>
      <InfoRow label="Nombre" value={product?.name} />
      <InfoRow label="Stock" value={product?.stock + ''} />
      <InfoRow label="Precio" value={product?.listPrices[0]?.price + ''} />
    </CardContainer>
  );
};