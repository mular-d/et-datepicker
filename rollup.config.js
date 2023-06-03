import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const config = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "named",
  },
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    babel({
      exclude: /node_modules/,
    }),
    commonjs(),
    copy({
      targets: [{ src: "src/Calendar.css", dest: "dist" }],
    }),
    terser(),
  ],
};

export default config;
