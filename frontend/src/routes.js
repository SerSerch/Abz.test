import Landing from 'components/Landing';
//import Redirect from 'components/Redirect';

export default [
    {
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '*',
        component: Landing,
        exact: true
    },
]