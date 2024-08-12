import App from "./src/app/App";
import {Provider} from "react-redux";
import { store } from "./src/app/store";

export default function Index() {
  return (
      <Provider store={store}>
        <App/>
      </Provider>

  );
}
