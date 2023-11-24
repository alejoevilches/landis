import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Products } from "../components/Products";
import { SearchResults } from "../components/SearchResults";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/category",
    children:[
        {
            path:"/category/:cat",
            element:<Products />
        }
    ]
  },
  {
    path:"/search/:query",
    element:<SearchResults />
  }
]);