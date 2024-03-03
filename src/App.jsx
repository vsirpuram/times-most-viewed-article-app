/* eslint-disable react/prop-types */
import React from 'react';

import Header from './components/common/Header';
import Main from './components/common/Main';
import Footer from './components/common/Footer';
import PopularArticles from './pages/PopularArticles';

function App() {
  return (
    <>
      <Header />
      <Main>
        <PopularArticles />
      </Main>
      <Footer>
        Copyright (c) 2024 The New York Times Company.  All Rights Reserved.
      </Footer>
    </>
  );
}

export default App;
