// Dummy event data for admin
const events = [
    { id: 1, name: "Tech Talk", time: "3:00 PM" }
];

window.onload = function () {
    const eventsList = document.getElementById('eventsList');
    if (events.length === 0) {
        eventsList.innerHTML = "<p>No events scheduled!</p>";
    } else {
        events.forEach(event => {
            eventsList.innerHTML += `
                <div class="event">
                    <h3>${event.name}</h3>
                    <p>Time: ${event.time}</p>
                    <button onclick="manageEvent(${event.id})">Manage</button>
                </div>
            `;
        });
    }
};

function createEvent() {
    alert("Redirecting to Create Event Page... (To be developed)");
}

function manageEvent(eventId) {
    alert(`Managing Event ID: ${eventId}`);
}
