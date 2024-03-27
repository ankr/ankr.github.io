export const greetings = (): string => {
    return "Hello from js!";
};

document.addEventListener("DOMContentLoaded", () => {
    (document.getElementById("content") as HTMLElement).textContent =
        greetings();
});
