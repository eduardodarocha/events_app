import Image from "next/image";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Event Page</h1>

      <div>
        { data.map((ev) => 
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={300} height={200} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
          </a>
        )}
        {/* <a href="">
          <img />
          <h2>Events in London</h2>
        </a>
        <a href="">
          <img />
          <h2>Events in San Francisco</h2>
        </a>
        <a href="">
          <img />
          <h2>Events in Barcelona</h2>
        </a> */}
      </div>
    </div>
  );
};
export default EventsPage;

export async function getStaticProps() {
  
  const  { events_categories } = await import('/data/data.json');

  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
