const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
    },
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    }
};
