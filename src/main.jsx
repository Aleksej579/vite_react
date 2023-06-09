import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import './i18n';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import PageAbout from './routes/pageAbout'
import PageContact from './routes/pageContact'
import PageTest from './routes/pageTest'
import PageRecharts from './routes/pageRecharts'
import PageGraphics from './routes/pageGraphics'
import ErrorPage from "./routes/error-page"

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <PageAbout />,
      },
      {
        path: "/contact",
        element: <PageContact />,
      },
      {
        path: "/test",
        element: <PageTest />,
      },
      {
        path: "/recharts",
        element: <PageRecharts />,
      },
      {
        path: "/graphics",
        element: <PageGraphics />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
