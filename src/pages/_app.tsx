import AppRoutes from "@/routes";
import {Toaster} from "@/components/ui/toaster.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {store} from "@/app/store.ts";
import {Provider} from "react-redux";
import {Layout} from "@/components/layout";
import {BrowserRouter} from "react-router-dom";
import {Dialog} from "@radix-ui/react-dialog";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <TooltipProvider>
                    <Dialog>
                    <Layout>
                        <AppRoutes />
                        <Toaster />
                    </Layout>
                    </Dialog>
                </TooltipProvider>
            </Provider>
        </BrowserRouter>
    )
}

export default App
