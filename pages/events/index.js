import { useRouter } from 'next/router';
import EventList from '../../components/Events/EventList';
import EventsSearch from '../../components/Events/EventsSearch';
import { getAllEvents } from '../../helpers/api-utils';

const Events = (props) => {
  const router = useRouter();
  const events = props.events;

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default Events;
