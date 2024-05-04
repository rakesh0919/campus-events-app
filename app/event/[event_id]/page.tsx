import { getEventListeners } from "events";


async function getEventDetailedData(id: string) {
  let url = 'https://campus-events-app.onrender.com/api/events/' + id;

  const res = await fetch(url)

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
};
 


export default async function Page({ params }: { params: {event_id: string}}) {
  const event = await getEventDetailedData(params.event_id)
  console.log(event);
  const event_date = new Date(event.date);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full lg:max-w-5xl">
        <section>
          <h1 className="mb-16 text-5xl font-semibold">
            {event.name}
          </h1>

        </section>
        <section className='lg:flex mb-8'>
          <div className='lg:flex w-full lg:w-1/6'>
            <h2 className="mb-4 text-2xl font-semibold underline decoration-4">
              When
            </h2>
          </div>
          <div className='lg:px-0'>
            <h2 className="text-2xl">
              {event_date.getDate() + ' ' + event_date.toLocaleString('default', { month: 'long' }) 
                + ' ' + event_date.getFullYear() + ', ' + event_date.toLocaleTimeString('default', { hour12: true, hour: 'numeric', minute: 'numeric' })}
            </h2>
            {/* <h2 className="mb-4 text-2xl font-semibold">
              {event_date.toLocaleTimeString('default', { hour12: true, hour: 'numeric', minute: 'numeric' })}
            </h2> */}
          </div>
          
        </section>
        <section className='lg:flex mb-8'>
          <div className='flex lg:w-1/6'>
            <h2 className="mb-4 text-2xl font-semibold underline decoration-4">
              Where
            </h2>
          </div>
          <div>
            <p className='text-2xl'>
              {event.location}
            </p>
          </div>
          
        </section>
        <section className='lg:flex mb-8'>
          <div className='flex lg:w-1/6'>
            <h2 className="mb-4 text-2xl font-semibold underline decoration-4">
              What
            </h2>
          </div>
          <div>
            <p className='text-2xl'>
              {event.description}
            </p>
          </div>
          
        </section>
        
        
      </div>
      

      

      
      
    </main>
  );
}
