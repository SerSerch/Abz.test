import Landing from 'components/Landing';
import Test from 'components/Test';
import Login from 'containers/UserLoginContainer';
import Logup from 'containers/UserLogupContainer';

export default [
    {
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/logup',
        component: Logup,
        exact: true
    },
    {
        path: '/user/:id',
        component: Comment,
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