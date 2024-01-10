import { createBrowserRouter } from "react-router-dom";
import RealTime from "./pages/RealTime/RealTime";
import DifferTime from "./pages/DifferTime/DifferTime";
import Layout from "./components/Layout/Layout";

export const router = createBrowserRouter([
    {
        path : "/",
        element: <Layout />,
        children : [
            {
                path: "/",
                element : <RealTime />
            },
            {
                path : "/differTime",
                element : <DifferTime />
            },
        ]
    }
 
])