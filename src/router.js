import Home from './pages/Home';
import Code from './pages/Code';
import Build from './pages/Build';
import Options from './pages/Options';
import Review from './pages/Review';

const router = [
    {
        path: "/",
        element: <Home />,
        loader: null,
        children: []
    },
    {
        path: "/options",
        element: <Options />,
        loader: null,
        children: []
    },
    {
        path: "/code",
        element: <Code />,
        loader: null,
        children: []
    },
    {
        path: "/build",
        element: <Build />,
        loader: null,
        children: []
    },
    {
        path: "/review",
        element: <Review />,
        loader: null,
        children: []
    }
];

export default router;
