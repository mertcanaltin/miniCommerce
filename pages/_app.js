import store from "../store/index";
import { Provider } from "react-redux";
import '../styles/globals.css'
import MiniBasket from "../components/mini-basket";
export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
    <MiniBasket />
  </Provider>

}
