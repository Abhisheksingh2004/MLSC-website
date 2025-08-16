import About from "../pages/About";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Team from "../pages/Team";
import Works from "../pages/Works";
import Scheduler from "../pages/Scheduler";
import NotFound from "../pages/NotFound";

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/team',
        element: <Team />,
    },
    {
        path: '/events',
        element: <Events />,
    },
    {
        path: '/scheduler',
        element: <Scheduler />,
    },
    {
        path: '/works',
        element: <Works />,
    },
    {
        path: '/Projects',
        element: <Projects />,
    },
    {
        path: '/Events',
        element: <Events />,
    },
    {
        path: '*',
        element: <NotFound />, // Show 404 page for undefined routes
    },
];