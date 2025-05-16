import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; // Correct import

import "./styles/globals.css"

import ReactDOM from "react-dom/client";
import DefaultLayout from "./layouts/defaultLayout";

import { Index } from "./routes";
import { Participants } from "./routes/participants";
import { Venue } from "./routes/venue";
import { RaceInfoComponent } from "./routes/race-info";
import { InfoIndex } from "./routes/information";
import { TermsAndConditions } from "./routes/information/t&c";
import { Disclaimer } from "./routes/information/disclaimer";
import { c_5K } from "./routes/categories/5K";
import { c_10K } from "./routes/categories/10K";


// Define Routes at Entrypoint. (Data Entry Mode.)

const router = createBrowserRouter([
  {
    // Default Layout
    Component: DefaultLayout,
    children: [
      { index: true, Component: Index },
      { path: "race-info", Component: RaceInfoComponent },
      { path: "participants", Component: Participants },
      { path: "venue", Component: Venue },
      {
        path: "information",
        children: [
          { index: true, Component: InfoIndex },
          { path: "terms-and-conditions", Component: TermsAndConditions },
          { path: "disclaimer", Component: Disclaimer }
        ]
      },
      {
        path: "categories",
        children: [
          { path: "5K", Component: c_5K },
          { path: "10K", Component: c_10K }
        ]
      }
    ]
  }
]);


const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
  );
} else {
  console.error("Root element not found!");
}