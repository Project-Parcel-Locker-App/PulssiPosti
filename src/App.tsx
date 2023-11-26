import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import UserLoginScreen from "./screens/UserLoginScreen";
import DashboardScreenScreen from "./screens/DashboardScreen";
import SendParcelScreenScreen from "./screens/SendParcelScreen";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserLoginScreen />
      ),
    },
    {
      path: "/dashboard",
      element: (
        <DashboardScreenScreen />
      ),
    },
    {
      path: "/track",
      element: (
        <SendParcelScreenScreen />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
