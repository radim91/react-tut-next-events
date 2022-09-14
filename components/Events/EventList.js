import EventItem from './EventItem';

import styles from './EventList.module.css';

const EventList = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
