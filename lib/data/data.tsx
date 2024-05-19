export async function getEventDetailedData(id: string) {
	let url = "https://campus-events-app.onrender.com/api/events/" + id;

	const res = await fetch(url);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export async function getAllEventData() {
	const res = await fetch("https://campus-events-app.onrender.com/api/events");

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
