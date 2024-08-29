import { defineConfig } from "vite";
import dns from "dns";
import react from "@vitejs/plugin-react";

// For localhost
dns.setDefaultResultOrder("verbatim");

export default defineConfig({
	build: {
		outDir: "build",
	},
	plugins: [
		react({
			include: "**/*.jsx",
		}),
	],
	server: {
		port: 3000,
		watch: {
			usePolling: true,
		},
	},
});
