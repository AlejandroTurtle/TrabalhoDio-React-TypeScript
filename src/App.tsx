import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { BrowserRouter} from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import { getAllLocalStorage } from "./services/storage";


function App() {

  const localStorage = getAllLocalStorage()
  console.log(localStorage)
  return (
    <BrowserRouter>
      <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <MainRoutes/>
        </Layout>
      </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
