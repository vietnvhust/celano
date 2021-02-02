import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../components/core/Loading'
const Home = React.lazy(() => import('../pages/Home'))
const About = React.lazy(() => import('../pages/About'))
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