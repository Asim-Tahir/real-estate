import { defineConfig, loadEnv } from "vite";
import Vue from "@vitejs/plugin-vue";
import SvgIcons from "vite-plugin-svg-icons";
import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, resolve(__dirname)) };

  return defineConfig({
    plugins: [
      Vue(),
      SvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    server: {
      port: parseInt(process.env.VITE_PORT) || 3000,
      cors: true,
      strictPort: true,
      hmr: true,
      fs: {
        strict: false,
        // Allow serving files from one level up to the project root
        // allow: ["./src/graphql/**/*.graphql"],
      },
      proxy: {
        "^/api/": {
          target: process.env.VITE_API_URL || "http://localhost:4000",
          changeOrigin: false,
          rewrite: (path) => path.replace(/^\/api\/graphql/, "/graphql"),
        },
      },
      watch: {
        usePolling: true,
        useFsEvents: true,
      },
    },
    resolve: {
      alias: {
        "#": resolve(__dirname, "public"),
        "@": resolve(__dirname, "src"),
      },
    },
    define: { "process.env": process.env },
  });
};
