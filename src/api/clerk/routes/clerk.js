module.exports = {
  routes: [
    {
      method: "POST",
      path: "/clerk-sync",
      handler: "clerk.sync",
      config: {
        auth: false,
      },
    },
  ],
};
