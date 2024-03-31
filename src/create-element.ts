export interface CreateElementOptions {
    attributes?: Record<string, string | null>;
    textContent?: string;
    parent?: DocumentFragment | HTMLElement;
    children?: (DocumentFragment | HTMLElement)[];
}

export const createElement = (
    type: string,
    options: CreateElementOptions = {}
) => {
    const elm = document.createElement(type);

    if (options.attributes) {
        for (const [name, value] of Object.entries(options.attributes)) {
            const attribute = document.createAttribute(name);

            if (value !== null) {
                attribute.value = value;
            }

            elm.setAttributeNode(attribute);
        }
    }

    if (options.textContent) {
        elm.textContent = options.textContent;
    }

    if (options.children) {
        for (const child of options.children) {
            elm.appendChild(child);
        }
    }

    if (options.parent) {
        options.parent.appendChild(elm);
    }

    return elm;
};
