import Head from 'next/head';
import EventList from '../components/Events/EventList';
import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../helpers/api-utils';
import NewsletterRegistration from '../components/Input/NewsletterRegistration';

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default Home;
