export default {
  apps: [
    {
      name: "starter-server",
      script: "dist/index.js",
      node_args: "--experimental-specifier-resolution=node",
    },
  ],
};
