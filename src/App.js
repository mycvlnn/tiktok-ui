import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import { publicRoutes } from '@/routes';
import { DefaultLayout } from '@/components/Layout';
import { Fragment } from 'react';

function App() {
    const renderPublicRoutes = () => {
        return publicRoutes.map((route, index) => {
            const { path, component: Page } = route;
            // const Layout = route.layout === null ? Fragment : DefaultLayout;
            let Layout = DefaultLayout;

            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }

            return (
                <Route
                    key={index}
                    path={path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                />
            );
        });
    };

    return (
        <Router>
            <div className="App">
                <Routes>{renderPublicRoutes()}</Routes>
            </div>
        </Router>
    );
}

export default App;
