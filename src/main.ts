import { createElement } from "./create-element.js";

interface Project {
    title: string;
    description: string;
    githubUrl: string;
    demoUrl: string;
}

const projects: Project[] = [
    {
        title: "gp-test",
        description:
            "Just a simple test showing that github pages for other repositories shows up on the same domain.",
        githubUrl: "https://github.com/ankr/gp-test",
        demoUrl: "/gp-test",
    },
    {
        title: "vector.js",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat fermentum lacus, nec aliquam arcu tempus vitae. Donec id ex turpis. Cras eget orci viverra, blandit ipsum malesuada, tempor mauris. Donec ac feugiat orci.",
        githubUrl: "https://github.com/ankr/vector.js",
        demoUrl: "/vector.js",
    },
    {
        title: "annie.js",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat fermentum lacus, nec aliquam arcu tempus vitae. Donec id ex turpis. Cras eget orci viverra, blandit ipsum malesuada, tempor mauris. Donec ac feugiat orci.",
        githubUrl: "https://github.com/ankr/annie.js",
        demoUrl: "/annie.js",
    },
    {
        title: "timer.js",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat fermentum lacus, nec aliquam arcu tempus vitae. Donec id ex turpis. Cras eget orci viverra, blandit ipsum malesuada, tempor mauris. Donec ac feugiat orci.",
        githubUrl: "https://github.com/ankr/timer.js",
        demoUrl: "/timer.js",
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
                attributes: { class: "card__description" },
                textContent: project.description,
            }),
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
                                    href: project.demoUrl,
                                    title: "View demo page",
                                },
                                children: [createIcon("clapper")],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });

    return fragment;
};

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementsByClassName("cards")[0];

    for (const project of projects) {
        console.log("foo");
        wrapper.appendChild(createCard(project));
    }
});
