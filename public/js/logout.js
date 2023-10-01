const logout = async () => {
    // Send a post request, which will delete the session
    const response = await fetch("/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("Failed to log out.");
    }
};

document.querySelector("#logout").addEventListener("click", logout);
