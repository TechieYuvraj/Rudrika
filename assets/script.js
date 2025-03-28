// =============================
//       EVENT DATA
// =============================
const events = [
    {
        id: "Singing",
        title: "Euphonic Echoes",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/Singing.jpg",
        ruleBook: "https://drive.google.com/file/d/1qEsabFU5xQbT3HY8BfXWp_RNy_4NWP01/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "Get ready to be mesmerized at Euphonic Echoes, where voices take center stage and melodies fill the air! This unforgettable event will celebrate the power of music, with captivating performances, stunning harmonies, and raw talent that resonate with every note.",
        coordinators: [
            { name: "Ashutosh Bissa", contact: "+91 8949276044" },
            { name: "Aamir Khan", contact: "+91 8299328515" }
        ]
    },
    {
        id: "Fashion Show",
        title: "Majestic Threads",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/FashionShow.jpg",
        ruleBook: "https://drive.google.com/file/d/11LOdHHA6_kr8Oo09Gk52OEMz5ehCaeZL/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "Get ready to be captivated at our upcoming fashion show, where creativity meets runway! It is an unforgettable evening that will be celebrating bold designs, innovative styles, and the unique flairs. This is more than just a fashion show-it's a vibrant showcase of self-expression, diversity and fusion of fashion.",
        coordinators: [
            { name: "Parul Sharma", contact: "+91 9257142145" },
            { name: "Harshal Roy", contact: "+91 7742797417" }
        ]
    },
    {
        id: "beat-drop",
        title: "Blaze the Stage",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/BeatDrop.jpg",
        ruleBook: "https://drive.google.com/file/d/1aVGZH2VLkUoceCJVaiY0pAYqZUzbmfMo/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: `"Inter-College Dance Competition. Get ready to Blaze the stage! an electrifying inter-college dance competition that promises to showcase the best of talent, energy, and enthusiasm. Calling all dance enthusiasts!"`,
        coordinators: [
            { name: "Harshvardhan Singh", contact: "+91 81122 80766" },
            { name: "Janvi Patel", contact: "+91 9587686203" }
        ]
    },
    {
        id: "Drama",
        title: "Theatrical Thunder",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/Drama.jpg",
        ruleBook: "https://drive.google.com/file/d/1V4HjW_syj6iRgiiYnOnCNJC0pJnk7QjI/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "Theatrical thunder is the stage drama event at Rudrika 2025, where participants will perform a live play. The performance should showcase acting, creativity, direction, and technical skills. The play will be performed on stage in front of an audience, and it's a platform for teams to present their dramatic talents.",
        coordinators: [
            { name: "Aryan Srivastav", contact: "+91 7091429578" },
            { name: "Vinay Ramani", contact: "+91 8058278284" }
        ]
    },
    {
        id: "Band",
        title: "Rock the Stage",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/Band.jpg",
        ruleBook: "https://drive.google.com/file/d/1l2jNkHQtJ8A2oZM4sHRA2AdG5RrHGELw/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "Rock the Stage is an electrifying musical competition where bands from various genres come together to showcase their talent, creativity, and stage presence. This event is designed to celebrate live music, foster collaboration among musicians, and provide a platform for emerging bands to make their mark.",
        coordinators: [
            { name: "Ketan Suthar", contact: "+91 9819678847" },
            { name: "Rahul Khanna", contact: "+91 8209686398" }
        ]
    },
    {
        id: "DJwar",
        title: "Turntable Titans",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/DJwar.jpg",
        ruleBook: "https://drive.google.com/file/d/1JVyDrKB6e6haSD-igo7udTkrgZLL6JWx/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "Get ready for an electrifying battle of beats and rhythm! DJ War is where top DJs go head-to-head, bringing their best mixes and energy to the stage. It's more than just playing tracks - it's about commanding the crowd, blending music with skill, and delivering an unforgettable experience.",
        coordinators: [
            { name: "Aditya Kumawat", contact: "+91 8005563032" },
            { name: "Aakanksha Sehgal", contact: "+91 9257745337" }
        ]
    },
    {
        id: "xFactor",
        title: "Beyond the Spotlight",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/xFactor.jpg",
        ruleBook: "https://drive.google.com/file/d/1AYTKyyWb7tHv3ey62tBijdf7kovPpbQ6/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "This is a captivating event that blends the magic of Shayari, Poetry, Rap and Stand-up Comedy creating an unforgettable experience of emotions, rhythm and laughter. The participants have the pickup category-solo,duo and crew.",
        coordinators: [
            { name: "Devine Alphonso", contact: "+91 6362563196" },
            { name: "Rudransh Upadhyay", contact: "+91 9521121626" }
        ]
    },
    {
        id: "BeatBoxing",
        title: "Vocal Vertex",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/BeatBox.jpg",
        ruleBook: "https://drive.google.com/file/d/1ksFbJCPhZyefPNJ8JOGNLXrvW3R-drkf/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "In VOCAL VERTEX (Beat Boxing) is a competition, performance, or gathering where beatboxers showcase their skills in vocal percussion and they have to pickup the category either solo or duo only.",
        coordinators: [
            { name: "Arya Sharma", contact: "+91 8118848846" },
            { name: "Mayank Chandel", contact: "+91 8690316625" }
        ]
    },
    {
        id: "Case Investigation",
        title: "Riddle Raiders",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Yet to be decided",
        image: "images/events/CaseInvest.jpg",
        ruleBook: "https://drive.google.com/file/d/1fEsf0blidaRWJPBejgHD-ujJJEtl5U6R/view?usp=sharing",
        register: "https://docs.google.com/forms/d/e/1FAIpQLSew3ABJtxPiaKjajSTTin3IJvIgoEXXluhL9JvKhFtTL9PI1g/viewform",
        description: "Riddle Raiders is an exhilarating treasure hunt designed to challenge participants' problem-solving skills, teamwork, and strategic thinking. Teams will navigate through a series of clues and challenges, racing against time to uncover hidden treasures. The adventure unfolds across different locations, each presenting unique puzzles and obstacles.",
        coordinators: [
            { name: "Akanksha Rathore", contact: "+91 8764072476" },
            { name: "Tanshi Arora", contact: "+91 6376204248" }
        ]
    }
];

// =============================
//      LOAD EVENTS ON PAGE
// =============================
function loadEvents() {
    const eventContainer = document.getElementById("event-container");
    if (!eventContainer) return; // Prevent errors if element is missing
    eventContainer.innerHTML = ""; // Clear existing content

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("card");
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.time}</p>
            <button onclick="viewEvent('${event.id}')">View Details</button>
        `;
        eventContainer.appendChild(eventCard);
    });
}

// =============================
//      REDIRECT TO EVENT PAGE
// =============================
function viewEvent(eventId) {
    window.location.href = `event.html?event=${encodeURIComponent(eventId)}`;
}

// =============================
//     LOAD EVENT DETAILS
// =============================
function loadEventFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("event");

    if (!eventId) {
        console.error("No event ID found in URL.");
        return;
    }

    loadEvent(eventId);
}

// =============================
//     DISPLAY EVENT DETAILS
// =============================
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
    document.getElementById("register").href = event.register;
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

// =============================
//   LOAD EVENTS ON PAGE LOAD
// =============================
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("event-container")) {
        loadEvents(); // Load events on the homepage
    }
    if (document.getElementById("event-title")) {
        loadEventFromURL(); // Load event details on the event page
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");

    mobileMenu.addEventListener("click", function() {
        menu.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake"); // No inner HTML needed
    document.body.appendChild(snowflake);

    // Random properties
    let size = Math.random() * 20 + 10 + "px"; // Vary size
    let left = Math.random() * window.innerWidth + "px";
    let duration = Math.random() * 5 + 3 + "s"; // Random fall speed
    let rotation = Math.random() * 360 + "deg"; // Random rotation start

    // Apply styles
    snowflake.style.left = left;
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.animationDuration = duration;

    // Remove snowflake after animation ends
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000);
}

// Create snowflakes at intervals
setInterval(createSnowflake, 200);

document.addEventListener("DOMContentLoaded", function () {
    // Create the popup overlay
    let popupOverlay = document.createElement("div");
    popupOverlay.id = "popupOverlay";

    // Create the popup container
    let popupContainer = document.createElement("div");
    popupContainer.id = "popupContainer";

    // Create the close button
    let closeButton = document.createElement("span");
    closeButton.id = "closePopup";
    closeButton.innerHTML = "&times;"; // 'X' symbol

    // Create the image element
    let popupImage = document.createElement("img");
    popupImage.id = "popupImage";
    popupImage.src = "images/events/CelebNight.png"; // Replace with actual image path
    popupImage.alt = "Celebrity Night Surprise";

    // Append elements
    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(popupImage);
    popupOverlay.appendChild(popupContainer);
    document.body.appendChild(popupOverlay);

    // Close popup on button click
    closeButton.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });

    // Close popup when clicking outside the container
    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });

    // Automatically show the popup on page load
    popupOverlay.style.display = "flex";
});

// Hide preloader after the page loads
document.addEventListener("DOMContentLoaded", function () {
    let letters = document.querySelectorAll(".letter");

    // Animate each letter with a delay
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animationDelay = `${index * 0.2}s`;
            letter.classList.add("animate");
        }, index * 300);
    });

    // Hide preloader after animation completes
    setTimeout(() => {
        document.getElementById("preloader").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").style.display = "block"; // Show main content
        }, 1000);
    }, 3900);
});

// Function to get the event ID from the URL (?event= format)
function getEventIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("event"); // Extracts the event ID correctly
}

// Function to display coordinators for the selected event
function displayCoordinators(eventId) {
    const coordinatorsList = document.getElementById("coordinators-list");
    coordinatorsList.innerHTML = ""; // Clear previous coordinators

    // Find the event matching the eventId
    const selectedEvent = events.find(event => event.id === eventId);
    if (!selectedEvent) {
        coordinatorsList.innerHTML = "<p>No coordinators found for this event.</p>";
        return;
    }

    // Loop through the coordinators of the selected event and add them dynamically
    selectedEvent.coordinators.forEach((coordinator) => {
        const coordinatorCard = document.createElement("div");
        coordinatorCard.classList.add("team-card");

        // Name
        const nameElement = document.createElement("h3");
        nameElement.textContent = coordinator.name;

        // Contact Number
        const contactElement = document.createElement("p");
        contactElement.textContent = `📞 ${coordinator.contact}`;

        // WhatsApp Button
        const whatsappLink = document.createElement("a");
        whatsappLink.href = `https://wa.me/${coordinator.contact.replace(/\s+/g, '')}`;
        whatsappLink.target = "_blank";
        whatsappLink.classList.add("whatsapp-button");
        whatsappLink.innerHTML = "Chat on WhatsApp 💬";

        // Append elements
        coordinatorCard.appendChild(nameElement);
        coordinatorCard.appendChild(contactElement);
        coordinatorCard.appendChild(whatsappLink);
        coordinatorsList.appendChild(coordinatorCard);
    });
}

// Execute when page loads
document.addEventListener("DOMContentLoaded", () => {
    const eventId = getEventIdFromURL(); // Get event ID from URL
    if (eventId) {
        displayCoordinators(eventId); // Display coordinators for that event
    }
});
