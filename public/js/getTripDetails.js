console.log("running");
const getTripDetails = async (e) => {
    const tripId = e.target.offsetParent.getAttribute("data-tripId");
    const response = await fetch(`/trip/${tripId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        document.location.replace(`/trip/${tripId}`);
    } else {
        alert("Failed to load trip data.");
    }
    console.log(tripId);
};

document.getElementById("card").addEventListener("click", getTripDetails);
