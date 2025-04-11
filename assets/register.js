const upiBaseLink = "upi://pay?pa=kritikarohilla11294@oksbi&tn=Click%20to%20pay&am=";

// Pricing table based on event and team size
const eventPricing = {
    "Euphonic Echoes": { solo: 199, duo: 399 },
    "Majestic Threads": { group: 799 },
    "Blaze the Stage": { solo: 299, duo: 499, group: 899 },
    "Theatrical Thunder": { group: 999 },
    "Rock the Stage": { group: 799 },
    "Turntable Titans": { solo: 299 },
    "Beyond the Spotlight": { solo: 299, duo: 399, group: 699 },
    "Vocal Vertex": { solo: 199 }
};

// Allowed team sizes based on event type
const eventTeamSizes = {
    "Euphonic Echoes": { solo: [1, 1], duo: [2, 2] },
    "Majestic Threads": { group: [5, 20] },
    "Blaze the Stage": { solo: [1, 1], duo: [2, 2], group: [4, 15] },
    "Theatrical Thunder": { group: [4, 12] },
    "Rock the Stage": { group: [3, 8] },
    "Turntable Titans": { solo: [1, 1] },
    "Beyond the Spotlight": { solo: [1, 1], duo: [2, 2], group: [4, 8] },
    "Vocal Vertex": { solo: [1, 1] }
};

// Form elements
const eventSelect = document.getElementById("eventSelect");
const teamTypeSelect = document.getElementById("teamType");
const teamSizeSelect = document.getElementById("teamSize");
const memberDetails = document.getElementById("memberDetails");
const paymentLink = document.getElementById("paymentLink");
const teamSizeLabel = document.getElementById("teamSizeLabel");

// Handle event selection
eventSelect.addEventListener("change", function () {
    const selectedEvent = this.value;
    updateTeamTypeOptions(selectedEvent);
});

// Ensure team size selection is always visible
teamSizeSelect.classList.remove("hidden");
teamSizeLabel.classList.remove("hidden");

// Update team type options based on selected event
function updateTeamTypeOptions(event) {
    teamTypeSelect.innerHTML = `<option value="" disabled selected>Select Team Type</option>`;

    if (eventPricing[event]) {
        Object.keys(eventPricing[event]).forEach(type => {
            let option = document.createElement("option");
            option.value = type;
            option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            teamTypeSelect.appendChild(option);
        });
    }

    teamSizeSelect.value = "";
    teamSizeSelect.disabled = true; // Default: disable team size until selection
    memberDetails.innerHTML = "";
    updatePaymentLink(); // Reset payment link
}

// Handle team type selection
teamTypeSelect.addEventListener("change", function () {
    const selectedEvent = eventSelect.value;
    const selectedType = this.value;

    if (!eventTeamSizes[selectedEvent] || !eventTeamSizes[selectedEvent][selectedType]) return;

    if (selectedType === "solo") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].solo;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event

    } else if (selectedType === "duo") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].duo;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event

    } else if (selectedType === "group") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].group;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event
    }
});

// Handle team size selection
teamSizeSelect.addEventListener("change", function () {
    const selectedEvent = eventSelect.value;
    const selectedType = teamTypeSelect.value;
    const selectedSize = parseInt(this.value);

    updateMemberFields(selectedSize);
    updatePaymentLink(selectedEvent, selectedType, selectedSize);
});

// Function to dynamically update member input fields
function updateMemberFields(teamSize) {
    memberDetails.innerHTML = "";
    if (teamSize > 1) {
        memberDetails.classList.remove("hidden");
        for (let i = 1; i < teamSize; i++) {  // Start from 1 (Leader is already there)
            let div = document.createElement("div");
            div.innerHTML = `
                <label>Member ${i} Name:</label>
                <input type="text" name="memberName${i}" class="memberName" required><br><br>
                <label>Member ${i} Email:</label>
                <input type="email" name="memberEmail${i}" class="memberEmail" required><br><br>
                <label>Member ${i} Phone No.:</label>
                <input type="tel" name="memberPhone${i}" class="memberPhone" required pattern="[0-9]{10}" title="Enter 10-digit phone number"><br><br>
                <label>Member ${i} Roll No.:</label>
                <input type="text" name="memberRollNo${i}" class="memberRollNo" placeholder="Only for the students of GIT College"><br><br>
            `;
            memberDetails.appendChild(div);
        }
    } else {
        memberDetails.classList.add("hidden");
    }
}

// Update the UPI payment link
function updatePaymentLink(event = "", type = "", size = 1) {
    if (!event || !type) {
        paymentLink.href = "#"; // Reset if no selection
        return;
    }

    let amount = eventPricing[event][type] || 0;
    paymentLink.href = `${upiBaseLink}${amount}&cu=INR`;
}

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

document.getElementById("leaderMobile").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (this.value.length > 10) this.value = this.value.slice(0, 10); // Limit to 10 digits
});

document.getElementById("leaderEmail").addEventListener("input", function () {
    this.value = this.value.replace(/\s/g, ""); // Remove spaces
});

document.getElementById("generateQR").addEventListener("click", function () {
    let upiLink = paymentLink.href;

    if (upiLink === "#") {
        alert("Please select an event and team type to generate the payment link.");
        return;
    }

    let qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.innerHTML = ""; // Clear any previous QR codes

    let qrCode = new QRCode(qrCodeContainer, {
        text: upiLink,
        width: 250,
        height: 250,
        colorDark: "#000", // Black QR code
        colorLight: "#fff", // White background
        correctLevel: QRCode.CorrectLevel.H // High error correction
    });
});

import { validRollNumbers } from "./rollNumbers.js?v=1.4"; // Adjust the path if needed

document.addEventListener("DOMContentLoaded", function () {
    const gitCheckbox = document.getElementById("gitStudent");
    const rollNoField = document.getElementById("rollNoField");
    const utrField = document.getElementById("utrNumber");
    const payButton = document.getElementById("paymentLink");
    const scanToPayButton = document.getElementById("generateQR");
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    const gitpayment = document.getElementById("gitpayment");
    const gitUTR = document.getElementById("gitUTR");

    // Toggle visibility based on GIT checkbox
    gitCheckbox.addEventListener("change", function () {
        if (this.checked) {
            rollNoField.style.display = "block"; // Show Roll No field
            utrField.style.display = "none"; // Hide UTR field
            payButton.style.display = "none"; // Hide Pay Now button
            scanToPayButton.style.display = "none"; // Hide Scan to Pay button
            qrCodeContainer.style.display = "none"; // Hide QR Code container
            gitpayment.style.display = "none"; // Hide GIT label
            gitUTR.style.display = "none"; // Hide UTR label
            utrField.removeAttribute("required");
        } else {
            rollNoField.style.display = "none";
            utrField.style.display = "block";
            payButton.style.display = "inline-block";
            scanToPayButton.style.display = "inline-block";
            qrCodeContainer.style.display = "block";
            gitpayment.style.display = "block"; // Show GIT label
            gitUTR.style.display = "block"; // Show UTR label
            utrField.setAttribute("required", "true");
        }
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const submitButton = this.querySelector('button[type="submit"]');
    if (submitButton.disabled) return;
    submitButton.disabled = true;

    // Show loading spinner
    document.getElementById("loadingOverlay").style.display = "flex";

    const gitCheckbox = document.getElementById("gitStudent");
    const rollNoInput = document.getElementById("rollNo").value.trim();

    // Validate Roll No if GIT checkbox is checked
    if (gitCheckbox.checked) {
        if (!validRollNumbers.includes(rollNoInput)) {
            alert("Invalid Roll Number! Please enter a valid GIT Roll Number.");
            submitButton.disabled = false;
            document.getElementById("loadingOverlay").style.display = "none";
            return;
        }
    }

    // Validate Member Roll Numbers
    let invalidRollNumbers = [];
    document.querySelectorAll(".memberRollNo").forEach(input => {
        let rollNo = input.value.trim();
        if (rollNo && !validRollNumbers.includes(rollNo)) {
            invalidRollNumbers.push(rollNo);
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
        }
    });

    if (invalidRollNumbers.length > 0) {
        alert("Invalid Member Roll Numbers: " + invalidRollNumbers.join(", "));
        submitButton.disabled = false;
        document.getElementById("loadingOverlay").style.display = "none";
        return;
    }

    // Proceed with form submission
    fetch("https://script.google.com/macros/s/AKfycbwzPSHJUblN6wauV3OvgvIO10KhjVFNsWhPxvBaqmoygOF5tLH90l8-lDx2kKd1tf8/exec", {
        method: "POST",
        body: new FormData(this)
    })
        .then(response => response.text())
        .then(data => {
            alert("Registration Successful!");
            window.location.href = "https://rtunotes.in"; // Redirect to the desired page
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
            submitButton.disabled = false;
        })
        .finally(() => {
            document.getElementById("loadingOverlay").style.display = "none";
        });
});
