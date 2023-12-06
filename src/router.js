import Home from './pages/Home';
import Code from './pages/Code';
import Deploy from './pages/Deploy';
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
        path: "/deploy",
        element: <Deploy />,
        loader: null,
        children: []
    }
];

export default router;
