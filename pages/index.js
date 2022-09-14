import EventList from '../components/Events/EventList';
import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../dummy.data';

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
