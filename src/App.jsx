import { Fragment } from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tools from "./components/tools/Tools";
export default function App(){
  return(
    <Fragment>
      <Tools />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}