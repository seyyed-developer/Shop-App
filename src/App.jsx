import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { RouterProvider } from "react-router-dom";

import router from "./router";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
