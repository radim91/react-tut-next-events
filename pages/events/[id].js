import EventSummary from '../../components/EventDetail/EventSummary';
import EventLogistics from '../../components/EventDetail/EventLogistics';
import EventContent from '../../components/EventDetail/EventContent';
import { getEventById, getFeaturedEvents } from '../../helpers/api-utils';
import { Fragment } from 'react';

const EventDetail = (props) => {
  if (!props.event) {
    return <p className="center">Loading...</p>;
  }

  return (
    <Fragment>
      <EventSummary title={props.event.title} />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />
      <EventContent>
        <p>{props.event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.id;
  const event = await getEventById(eventId);

  const notFound = typeof event === 'undefined';

  return {
    props: {
      event: event,
    },
    revalidate: 30,
    notFound,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { id: event.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default EventDetail;
