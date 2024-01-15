import { createBrowserRouter } from "react-router-dom";
import RealTime from "./pages/RealTime/RealTime";
import DifferTime from "./pages/DifferTime/DifferTime";
import Layout from "./components/Layout/Layout";
import Historic from "./pages/Historic/Historic";

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
            {
                path : "/historic",
                element : <Historic />
            }
        ]
    }
 
])