const signupHandler = async (e) => {
    e.preventDefault();

    const username = document.querySelector("#signup-username").value.trim();
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#signup-password").value.trim();
    // If user entered info, it'll send a post request, which will create a new user
    if (username && password && email) {
        const response = await fetch("/user/signup", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/user/dashboard");
        } else {
            alert("Failed to sign up.");
        }
    }
};

document
    .querySelector("#signupButton")
    .addEventListener("click", signupHandler);
