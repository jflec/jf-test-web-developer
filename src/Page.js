import React from 'react';
import SideNav from './side_nav/SideNav';
import './page.scss';
import Main from './main/Main';

const Page = () => {
  return (
    <div id="page">
      <SideNav />
      <Main />
    </div>
  );
};

export default Page;
