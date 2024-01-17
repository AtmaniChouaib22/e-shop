import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import Products from './components/Producst'
import ErrorPage from './ErrorPage'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />
        },
        {
            path: "/products",
            element: <Products />
        },
    ])
    return <RouterProvider router={router} />
}

export default Router ;