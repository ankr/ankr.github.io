import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            include: ["src/**/*.ts"],
            reporter: ["text"],
            all: true,
            thresholds: {
                lines: 100,
                functions: 100,
                branches: 100,
                statements: 100,
            },
        },
        environment: "jsdom",
        globals: true,
        reporters: ["default"],
        watch: false,
    },
});
