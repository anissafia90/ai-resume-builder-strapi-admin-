"use strict";

module.exports = {
  async syncClerkUser(ctx) {
    const { email, username, clerkId } = ctx.request.body;

    if (!email || !clerkId) {
      return ctx.badRequest("Missing data");
    }

    const existingUser = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        where: { email },
      });

    if (existingUser) {
      return ctx.send(existingUser);
    }

    const newUser = await strapi.db
      .query("plugin::users-permissions.user")
      .create({
        data: {
          email,
          username: username || email,
          provider: "local",
          confirmed: true,
          role: 1,
        },
      });

    return ctx.send(newUser);
  },
};
