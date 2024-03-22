const greetings = (): string => {
    return "Welcome!";
};

document.addEventListener("DOMContentLoaded", () => {
    (document.getElementById("content") as HTMLElement).textContent =
        greetings();
});
