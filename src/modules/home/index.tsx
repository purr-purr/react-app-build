import React, { useEffect } from 'react';

import s from './Home.module.scss';

const HomePage = () => {
  useEffect(() => {
    document.title = `Home Page`;
  }, []);

  return (
    <article className={s.container}>
      <h1>Home Page</h1>
    </article>
  );
};

export default HomePage;
