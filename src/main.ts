export const greetings = (): string => {
    return "Hello from js!";
};

const isHtmlElement = (elm: unknown): elm is HTMLElement => {
    return elm instanceof HTMLElement;
};

document.addEventListener("DOMContentLoaded", () => {
    const elm = document.getElementById("content");

    if (isHtmlElement(elm)) {
        elm.textContent = greetings();
    }
});
