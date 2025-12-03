import { useQuery } from "@tanstack/react-query";
import { useProductStore, useGlobalStore } from "../store";
import { container } from "@/infrastructure";
import { GetProductsUseCase } from "@/core/application";
import { ResponseProduct } from "@/core/domain";
import { useEffect, useMemo } from "react";

const key1 = "getProducts";
export const useProducts = () => {
  const { setProducts } = useProductStore();
  const { setIsLoading } = useGlobalStore();

  const getProductsUseCase = useMemo(
    () => container.resolve(GetProductsUseCase),
    []
  );

   const query = useQuery({
    queryKey: [key1],
    queryFn: async () => {
      const data: ResponseProduct | null = await getProductsUseCase.execute();
      return data;
    },
    retry: 1,
    networkMode: "always",
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });

  const { data, isFetching, isError } = query;

   useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching, setIsLoading]);


  useEffect(() => {
    if (data) {
      setProducts(data?.message?.result as []);
    }
  }, [data, setProducts]);
  

  return {
    isError,
    isLoading: isFetching,
  };
};