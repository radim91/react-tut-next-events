import Head from 'next/head';
import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
