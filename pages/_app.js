import store from "../store/store";
import { Provider } from "react-redux";
import '../styles/globals.css'
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Navbar />
    <Component {...pageProps} />
  </Provider>

}
