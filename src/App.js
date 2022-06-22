import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '@/routes';
import DefaultLayout from '@/layouts';
import { Fragment } from 'react';

function App() {
    const renderPublicRoutes = () => {
        return publicRoutes.map((route, index) => {
            const { path, component: Page } = route;
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
