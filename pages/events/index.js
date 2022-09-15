import { useRouter } from 'next/router';
import EventList from '../../components/Events/EventList';
import EventsSearch from '../../components/Events/EventsSearch';
import { getAllEvents } from '../../dummy.data';

const Events = () => {
  const router = useRouter();
  const events = getAllEvents();

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

export default Events;
