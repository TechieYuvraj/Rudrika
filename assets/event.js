// Unified Event Data
const events = [
    {
        id: "beat-drop",
        title: "Beat-Drop (Dance)",
        date: "February 19, 2025",
        time: "08:00 PM - 10:00 PM",
        venue: "OAT",
        image: "images/events/BeatDrop.jpg",
        ruleBook: "files/rawaz-rules.pdf",
        description: "Rawaz is a dazzling fashion show that showcases talent and style.",
        coordinators: [
            { name: "John Doe", contact: "+91 9876543210" },
            { name: "Jane Smith", contact: "+91 8765432109" }
        ]
    },
    {
        id: "techfest",
        title: "Tech Fest",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/techfest.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "Alice Johnson", contact: "+91 9988776655" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    }
];

// Function to Load Events into Homepage
function loadEvents() {
    const eventContainer = document.getElementById("event-container");
    if (!eventContainer) return; // Prevent errors if element is not found
    eventContainer.innerHTML = ""; // Clear existing content

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("card");
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3 class="text-xl font-bold">${event.title}</h3>
            <p>${event.time}</p>
            <button onclick="viewEvent('${event.id}')">View Details</button>
        `;
        eventContainer.appendChild(eventCard);
    });
}

// Function to Redirect to Event Details Page
function viewEvent(eventId) {
    window.location.href = `event.html?event=${encodeURIComponent(eventId)}`;
}

// Function to Load Event Details Based on URL Parameter
function loadEventFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("event");

    if (!eventId) {
        console.error("No event ID found in URL.");
        return;
    }

    loadEvent(eventId);
}

// Function to Load Event Details Based on Clicked Event
function loadEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) {
        console.error("Event not found:", eventId);
        return;
    }

    // Update HTML elements dynamically
    document.getElementById("event-title").innerText = event.title;
    document.getElementById("event-date").innerText = event.date;
    document.getElementById("event-time").innerText = event.time;
    document.getElementById("event-venue").innerText = event.venue;
    document.getElementById("event-image").src = event.image;
    document.getElementById("rule-book").href = event.ruleBook;
    document.getElementById("event-description").innerText = event.description;

    // Update Coordinator Section
    const coordinatorContainer = document.getElementById("coordinator-section");
    if (coordinatorContainer) {
        coordinatorContainer.innerHTML = ""; // Clear previous content

        event.coordinators.forEach(coordinator => {
            const coordinatorCard = document.createElement("div");
            coordinatorCard.classList.add("coordinator");

            coordinatorCard.innerHTML = `
                <h4>${coordinator.name}</h4>
                <p>Contact: ${coordinator.contact}</p>
            `;
            coordinatorContainer.appendChild(coordinatorCard);
        });
    }
}

// Load Events on Homepage and Event Details on Event Page
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("event-container")) {
        loadEvents(); // Load events on the homepage
    }
    if (document.getElementById("event-title")) {
        loadEventFromURL(); // Load event details on the event page
    }
});
