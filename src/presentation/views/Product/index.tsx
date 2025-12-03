import { Product } from "@/core/domain";
import { ProductCard } from "@/presentation/components";
import { useProducts } from "@/presentation/hooks";
import { useProductStore } from "@/presentation/store";

export const ProductPage = () => {
  useProducts();
  const { products } = useProductStore();
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {products?.map((product: Product, index) => (
          <ProductCard
            key={index}
            product={{
              id: product?.id,
              name: product?.name,
              listPrices: product?.listPrices,
              stock: product?.stock,
            }}
          />
        ))}
      </div>
    </div>
  );
};
