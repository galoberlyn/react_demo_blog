import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import 'app/assets/global.css';
import { BlogPage } from './pages/BlogPage/Loadable';
import { FavoritePage } from './pages/FavoritePage/Loadable';

export function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={
          <AppLayout>
            <BlogPage />
          </AppLayout>
        }/>
        <Route path="/favorites" element={
          <AppLayout>
            <FavoritePage />
          </AppLayout>
        }/>
        <Route path="*" element={<AppLayout>
            <NotFoundPage />
          </AppLayout>
        }/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
    </>
  );
}
