import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import {Provider} from "react-redux";
import store from "../src/store"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostForm />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
