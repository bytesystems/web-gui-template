import AppRoutes from "@/routes";
import {Toaster} from "@/components/ui/toaster.tsx";

function App() {
  return (
      <>
        <AppRoutes />
        <Toaster />
      </>
  )
}

export default App
