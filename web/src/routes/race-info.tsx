import { NavLink, createBrowserRouter } from "react-router";

createBrowserRouter([
    {
        path: "/race-info",
        Component: RaceInfoComponent,
    },
]);

export function RaceInfoComponent() {
    return(
        <div>
            <div className="text-center">
                <h1>This is stupid, or is it? Idk.</h1>
                <NavLink to="/" className="my-8 font-bold text-4xl hover:underline">Click here to go home.</NavLink>
            </div>
        </div>
    )
}