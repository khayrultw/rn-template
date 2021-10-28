import React from 'react';
import { Provider} from "react-redux";
import Navigation from "./navigation/components/Navigation";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
