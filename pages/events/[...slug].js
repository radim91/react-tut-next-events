import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/Events/EventList';
import ResultsTitle from '../../components/Events/ResultsTitle';
import { getFilteredEvents } from '../../helpers/api-utils';

const FilteredEventsPage = (props) => {
  // const router = useRouter();
  // const filterData = router.query.slug;

  // if (!props.filterData) {
  //   return <p className="center">Loading...</p>;
  // }
  //
  // const filteredYear = +filterData[0];
  // const filteredMonth = +filterData[1];

  // if (
  //   isNaN(filteredYear) ||
  //   isNaN(filteredMonth) ||
  //   filteredYear < 2021 ||
  //   filteredMonth < 1 ||
  //   filteredMonth > 12
  // ) {
  //   return <p className="center">Invalid filter.</p>;
  // }

  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${props.filteredYear}/${props.filteredMonth}`}
      />
    </Head>
  );

  const filteredEvents = props.filteredEvents;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHeadData}
        <p className="center">No events found.</p>
      </Fragment>
    );
  }

  const date = new Date(
    props.filteredYear,
    props.filteredMonth - 1
  ).toLocaleDateString('en-US');

  return (
    <div>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: { filteredEvents, filteredYear, filteredMonth },
  };
}

export default FilteredEventsPage;
