const greetings = (): string => {
    return "Welcome from js!";
};

document.addEventListener("DOMContentLoaded", () => {
    (document.getElementById("content") as HTMLElement).textContent =
        greetings();
});
