import Landing from 'containers/LandingContainer';
import Test from 'components/Test';
//import Redirect from 'components/Redirect';

export default [
    {
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '/test',
        component: Test,
        exact: true
    },
    {
        path: '*',
        component: Landing,
        exact: true
    },
]