import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from './../components/core/Loading'
const Home = React.lazy(() => import('./../pages/Home'))
const About = React.lazy(() => import('./../pages/About'))
const Faq = React.lazy(() => import('./../pages/Faq'))
const Products = React.lazy(() => import('./../pages/Products'))
const routers = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/faq',
        exact: true,
        component: Faq
    },
    {
        path: '/products',
        exact: true,
        component: Products
    }
]
const MainRouter = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                {
                    routers.map(({ component, path, ...rest }, index) =>
                        <Route key={index} component={component} path={path} {...rest} />
                    )
                }
            </Switch>
        </Suspense>
    )
}
export default MainRouter