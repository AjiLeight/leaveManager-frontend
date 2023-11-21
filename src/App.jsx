import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeeHome from "./pages/employeeHome";
import History from "./pages/history";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <EmployeeHome />,
    },
    {
      path: "/history",
      element: <History />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
