module.exports = {
  routes: [
    {
      method: "POST",
      path: "/clerk-sync",
      handler: "auth.syncClerkUser",
      config: { auth: false },
    },
  ],
};
