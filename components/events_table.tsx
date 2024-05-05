'use client'
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { useState } from 'react'

interface event {
  _id: string,
  name: string,
  description: string,
  date: string,
  location: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}



export default function Events_table(events: any) {
  const [filter, setFilter] = useState('');
    
    return (
        <section>
          <section className="flex min-w-full lg:max-w-5xl">
            <div className="mb-16 mt-32 lg:mb-10 w-full lg:max-w-5xl lg:text-left">
              <h2 className="text-2xl text-left">Upcoming Events</h2>
            </div>
            <div className="mb-16 mt-32 lg:mb-10 w-1/4 lg:max-w-5xl lg:text-left">
              <Input onChange={(input) => setFilter(input.target.value.toLowerCase())} placeholder="Search" />
            </div>
          </section>
          
          <section className=' w-full lg:max-w-5xl'>
            <div>
              <h2 className="mb-3 text-2xl font-semibold">
              </h2>

            </div>
            <div className="mb-32 grid space-y-4 lg:space-y-0 lg:space-x-4 lg:mb-0 w-full lg:max-w-5xl lg:grid-cols-4 text-left">
              {events.events.map((event: any) => (
                <Link
                href={"/event" + '/' + event._id }
                className={"h-36 lg:h-52 group rounded-lg border border-neutral-700 px-5 py-4 transition-colors  hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" + (event.name.toLowerCase().includes(filter) ? "" : " hidden") }
                key={event._id}
                
              >
                <div className="h-1/3 mb-10">
                  <h2 className="mb-3 text-2xl font-semibold">
                    {event.name}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    
                    </span>
                  </h2>
                </div>
                <p className="m-0 max-w-full text-sm opacity-50">
                  {event.description}
                </p>
              </Link>
              ))}
            </div>
          </section>
        </section>
      
    )







}