import { useReducer } from "react";
import Gallery from "./components/Gallery";
import { favouritesReducer, initialState } from "./reducers/favouritesReducer";

function App() {
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-4">Photo Gallery</h1>

        <Gallery favourites={favourites} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
