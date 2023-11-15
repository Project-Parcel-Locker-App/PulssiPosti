import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import "./App.css";
import UserLoginScreen from "./screens/UserLoginScreen";
import UserRegisterScreen from "./screens/UserRegisterScreen";

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
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;
