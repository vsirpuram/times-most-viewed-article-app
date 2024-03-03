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
      <Footer />
    </>
  );
}

export default App;
