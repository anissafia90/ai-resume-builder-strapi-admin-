"use strict";

module.exports = {
  async sync(ctx) {
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
          provider: "clerk",
          confirmed: true,
          role: 1,
        },
      });

    return ctx.send(newUser);
  },
};
