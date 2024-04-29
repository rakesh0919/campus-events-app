import { getEventListeners } from "events";


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

      
      <div className="w-full lg:max-w-5xl bg-gradient-to-r from-cyan-500 ">
        <h1 className="mb-3 text-8xl font-semibold">
          Bruin <br />Events
        </h1>
      </div>
      <div className="mb-16 mt-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h2 className="px-5 text-2xl">Upcoming Events</h2>
      </div>

      

      
      
    </main>
  );
}
