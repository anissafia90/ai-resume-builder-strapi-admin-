module.exports = ({ env }) => ({
  connection: {
    client: "mysql", // we are using MySQL
    connection: {
      host: env("DATABASE_HOST", "sql206.infinityfree.com"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "if0_40482815_Ai_Resume_Builder"),
      user: env("DATABASE_USERNAME", "if0_40482815"),
      password: env("DATABASE_PASSWORD", "gM3E5p2hEXxmz"),
      ssl: env.bool("DATABASE_SSL", false), // InfinityFree does not support SSL
    },
    pool: {
      min: env.int("DATABASE_POOL_MIN", 2),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
    acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
  },
});
