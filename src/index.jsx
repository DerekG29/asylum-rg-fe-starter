import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { ProfilePage } from './components/pages/Profile';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

// import { TablePage } from './components/pages/Table';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

const { primary_accent_color } = colors;

const layoutStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const footerStyle = {
  marginTop: 'auto'
};

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;
  return (
    <Layout style={layoutStyle}>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <div className="footer-wrapper" style={footerStyle}>
        <Footer
          style={{
            backgroundColor: primary_accent_color,
            color: '#E2F0F7',
          }}
        >
          <FooterContent />
        </Footer>
        <Footer
          style={{
            backgroundColor: primary_accent_color,
            padding: 0,
          }}
        >
          <SubFooter />
        </Footer>
      </div>
    </Layout>
  );
}
