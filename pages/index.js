import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import ShapeDivider from "../components/ShapeDivider";

const App = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <>
      <Header currentPage={currentPage} />
      <ShapeDivider />
      <Home />
      <Footer />
    </>
  );
};

export default App;
