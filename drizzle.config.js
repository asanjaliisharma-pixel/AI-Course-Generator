/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_7nhfzy1dCTIX@ep-young-bird-aew7jihi-pooler.c-2.us-east-2.aws.neon.tech/project?sslmode=require&channel_binding=require',
    }
  };