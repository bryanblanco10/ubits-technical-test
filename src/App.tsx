import { FullScreenLoader } from "@/presentation/components";
import { useGlobalStore } from "@/presentation/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/routes/index.tsx";
const queryClient = new QueryClient();

export const App = () => {
  const { isLoading } = useGlobalStore();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {isLoading && <FullScreenLoader />}
    </QueryClientProvider>
  );
};
