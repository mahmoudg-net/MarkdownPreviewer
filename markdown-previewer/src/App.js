import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Editor } from "./components/editor";
import { Preview } from "./components/preview";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Editor />
        <Preview />
      </Provider>
    </div>
  );
}

export default App;
