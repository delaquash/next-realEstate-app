import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api_utils"
import EventList from '../../components/events/event-list';
import EventSearch from "../../components/events/event-search";



const AllEventsPage=(props)=> {
  const { events } = props
  const router = useRouter();
  

  const findEventHandler = (month, year) => {
    const fullPath = `/event/${month}/${year}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler}/>
        <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
    const events = await getAllEvents()

    return {
      props: {
        events: events
      },
      revalidate: 60
    }
}

export default AllEventsPage;