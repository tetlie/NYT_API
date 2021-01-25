import React, { useState, useEffect } from 'react';
import NewsListItem from '../NewsListItem';
import SkeletonListItem from '../SkeletonListItem';

function NewsListContainer() {

  const [responseData, setResponseData] = useState(null);

  let year = 2021;
  let month = 1;

  const KEY = '3bso9208Acw4xGA4czyd8sa9dDGOpu94';
  const URL = `https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${KEY}`;

  // async function getArticles() {
  //   const response = await fetch (URL);
  //   const data = await response.json();
  //   setResponseData(data.response.docs);
  // }
  // getArticles()

  useEffect(() => {
    setTimeout( async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setResponseData(data.response.docs);
    }, 1000)
  })

  function renderSkeleton() {
    return (
      [1,2,3,4,5].map((number) => <SkeletonListItem key={number} theme="light"/>)
    );
  }

    function renderArticles() {
      return responseData.map((el, i) => (
          <NewsListItem
            key={i}
            title={el.headline.main}
            author={el.byline.original}
            snippet={el.abstract}
            published={el.pub_date}
            link={el.web_url}
          />
        ));
        
      }
  

  return (
    <>
      <ul>
        {(responseData) ? renderArticles() : renderSkeleton() }
		  </ul>
    </>
  )
};

export default NewsListContainer;