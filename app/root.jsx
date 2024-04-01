import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./tailwind.css?url";
import { createContext, useState } from "react";
import { LiveReload } from "./components/LiveReload";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const OrderContextManager = createContext();

export default function App() {
  const [getServiceTypeId, setServiceTypeId] = useState("Im context api service id")

  return (
    <>
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body> 
      <OrderContextManager.Provider value={[getServiceTypeId, setServiceTypeId]}>
        <Outlet />
        <ScrollRestoration />
        <LiveReload port={8002} />
        <Scripts />
        </OrderContextManager.Provider>
      </body>
    </html>
    </>
  );
}
