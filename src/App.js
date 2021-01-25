import React, { useState, useEffect } from 'react';
import GlobalStyle from './components/GlobalStyle';
import NewsListContainer from './components/NewsListContainer';
import Wrapper from './components/Wrapper/Wrapper';

function App() {


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>New York Times</h1>
        <NewsListContainer />
		</Wrapper>
    </>
  )
};

export default App;