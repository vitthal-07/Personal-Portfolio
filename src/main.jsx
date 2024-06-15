import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./container/about/index.jsx";
import { Skills } from "./container/skills/index.jsx";
import { Resume } from "./container/resume/index.jsx";
import Home from "./container/home/index.jsx";
import { Portfolio } from "./container/portfolio/index.jsx";
import { Contact } from "./container/contact/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} element={<App />} />
    </React.StrictMode>
);
