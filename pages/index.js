import EventList from '../components/Events/EventList';
import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../helpers/api-utils';

const Home = (props) => {
  return (
    <div className={styles.container}>
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
