import Home from './pages/Home';
import Code from './pages/Code';
import Build from './pages/Build';
import Deploy from './pages/Deploy';
import Review from './pages/Review';
import Options from './pages/Options';

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
        path: "/review",
        element: <Review />,
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
        path: "/deploy",
        element: <Deploy />,
        loader: null,
        children: []
    }
];

export default router;
