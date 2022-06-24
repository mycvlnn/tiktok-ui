import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
import { HeaderOnly } from '@/layouts';
import { path } from '@/config';
import { Live } from '@/pages';

const publicRoutes = [
    { path: path.home, component: Home },
    { path: path.following, component: Following },
    { path: path.profile, component: Profile },
    { path: path.live, component: Live },
    { path: path.upload, component: Upload, layout: HeaderOnly },
    { path: path.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
