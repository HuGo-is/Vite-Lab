import { defineConfig } from "vite";
import analyzeErrorsPlugin from "./src/analyzeErrorsPlugin.js";

export default defineConfig({
    plugins: [
        analyzeErrorsPlugin(
            "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"
        ),
    ],
});
