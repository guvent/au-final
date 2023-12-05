import Home from './pages/Home';

const router = [
    {
        path: "/",
        element: <Home />,
        loader: null,
        children: []
    }
];

export default router;
