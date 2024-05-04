import { getEventListeners } from "events";
import Link from 'next/link'


async function getData() {
  const res = await fetch('https://campus-events-app.onrender.com/api/events')

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
};
 


export default async function Home() {
  const events = await getData()
  console.log(events)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>

      
      <div className="w-full lg:max-w-5xl ">
        <h1 className="mb-3 text-8xl font-semibold">
          Bruin <br />Events
        </h1>
      </div>
      <div className="mb-16 mt-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h2 className="text-2xl">Upcoming Events</h2>
      </div>

      <div className="mb-32 grid text-center space-x-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {events.map((event) => (
          <Link
          href={"/event" + '/' + event._id }
          className="group rounded-lg border border-neutral-700 px-5 py-4 transition-colors  hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={event._id}
          
        >
          <div className="h-1/3 mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              {event.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
              </span>
            </h2>
          </div>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {event.description}
          </p>
        </Link>
        ))}
      </div>

      
      
    </main>
  );
}
