const events = [
    { id: 1, name: "Tech Talk", time: "3:00 PM" },
    { id: 2, name: "Music Fest", time: "5:00 PM" }
];

window.onload = function () {
    const eventsList = document.getElementById('eventsList');
    if (events.length === 0) {
        eventsList.innerHTML = "<p>No events scheduled!</p>";
    } else {
        events.forEach(event => {
            eventsList.innerHTML += `
                <div class="event" onclick="joinEvent(${event.id})">
                    <h3>${event.name}</h3>
                    <p>Time: ${event.time}</p>
                </div>
            `;
        });
    }
};

function joinEvent(eventId) {
    alert(`Joining Event ID: ${eventId}`);
    
}
