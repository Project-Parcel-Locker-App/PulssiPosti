import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import "./App.css";
import UserLoginScreen from "./screens/UserLoginScreen";
import UserRegisterScreen from "./screens/UserRegisterScreen";
import DashboardScreenScreen from "./screens/DashboardScreen";
import SendParcelScreenScreen from "./screens/SendParcelScreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <UserRegisterScreen />,
    },
    {
      path: "/",
      element: <UserLoginScreen />,
    },
    {
      path: "/dashboard",
      element: <DashboardScreenScreen />,
    },
    {
      path: "/track",
      element: <SendParcelScreenScreen />,
    }
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;
