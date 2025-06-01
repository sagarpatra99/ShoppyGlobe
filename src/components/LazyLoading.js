import { lazy } from "react";

export const components = {
  NotFound: lazy(() => import("./NotFound.jsx")),
  Home: lazy(() => import("./Home.jsx")),
  ProductDetails: lazy(() => import("./ProductDetails.jsx")),
  Cart: lazy(() => import("./Cart.jsx")),
  ProductList: lazy(() => import("./ProductList.jsx")),
  LearnMore: lazy(() => import("./LearnMore.jsx")),
};
