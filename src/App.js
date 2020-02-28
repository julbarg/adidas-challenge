import BagPage from './components/BagPage';
import Layout from './components/Layout';
import ProductPage from './components/ProductPage';
import React from 'react';
// eslint-disable-next-line sort-imports
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

const App = () => {
    return (
        <Layout>
            <Router>
                <Route exact path="/" component={ProductPage} />
                <Route path="/bag" component={BagPage} />
            </Router>
        </Layout>
    )
}

export default App;
