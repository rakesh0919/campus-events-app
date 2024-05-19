import Events_table from "@/components/events_table";
import { getAllEventData } from "@/lib/data/data";

export default async function Home() {
	const events = await getAllEventData();
	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-5 pt-10 lg:pt-24 lg:p-24">
			<div className="w-full lg:max-w-5xl ">
				<h1 className="mb-3 text-5xl lg:text-8xl font-semibold">
					Bruin <br />
					Events
				</h1>
			</div>
			<section className="w-full lg:max-w-5xl">
				<Events_table events={events} />
			</section>
		</main>
	);
}
