import contentCard from './components/contentCard'
import contentDetail from './components/contentDetail'

const routers = [
    // 首页
    {
        path: 'homecode/:type?',
        name: 'homecode',
        meta: {},
        component: contentCard
    },
    {
        path: 'contentdetail',
        name: 'contentdetail',
        meta: {},
        component: contentDetail
    }
];

export default routers;
