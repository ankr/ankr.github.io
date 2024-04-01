import { createElement } from "./create-element.js";

interface Project {
    title: string;
    description: string;
    githubUrl: string;
    previewUrl: string;
}

const projects: Project[] = [
    {
        title: "gp-test",
        description:
            "Just a simple test showing that github pages for other repositories shows up on the same domain.",
        githubUrl: "https://github.com/ankr/gp-test",
        previewUrl: "/gp-test",
    },
    {
        title: "vector.js",
        description:
            'A 2d vector class exposing a "immutable" vector object using Object.freeze() - I use this in almost all my game/animation projects.',
        githubUrl: "https://github.com/ankr/vector.js",
        previewUrl: "/vector.js",
    },
    {
        title: "annie.js",
        description:
            "Simple tween animation framework, still in its early days.",
        githubUrl: "https://github.com/ankr/annie.js",
        previewUrl: "/annie.js",
    },
    {
        title: "timer.js",
        description:
            "A game timer to be used in a game loop, is has pause/resume functionalities.",
        githubUrl: "https://github.com/ankr/timer.js",
        previewUrl: "/timer.js",
    },
];

const createIcon = (name: string) => {
    return createElement("span", {
        attributes: { class: "icss-stack icss-tada-hover" },
        children: [
            createElement("i", {
                attributes: { class: `icss-${name}` },
                textContent: " ",
            }),
        ],
    });
};

const createCard = (project: Project) => {
    const fragment = document.createDocumentFragment();

    createElement("div", {
        attributes: { class: "card" },
        parent: fragment,
        children: [
            createElement("div", {
                attributes: { class: "card__title" },
                children: [
                    createElement("h2", {
                        textContent: project.title,
                    }),
                    createElement("div", {
                        attributes: { class: "card__actions" },
                        children: [
                            createElement("a", {
                                attributes: {
                                    href: project.githubUrl,
                                    target: "_blank",
                                    title: "View project on github",
                                },
                                children: [createIcon("github-o")],
                            }),
                            createElement("a", {
                                attributes: {
                                    href: project.previewUrl,
                                    title: "View demo page",
                                },
                                children: [createIcon("clapper")],
                            }),
                        ],
                    }),
                ],
            }),
            createElement("div", {
                attributes: { class: "card__description" },
                textContent: project.description,
            }),
        ],
    });

    return fragment;
};

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementsByClassName("cards")[0];

    for (const project of projects) {
        wrapper.appendChild(createCard(project));
    }
});
