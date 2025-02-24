/**@type {import("drizzle-kit")} */

export default{
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_DTZ1K7jJxdyQ@ep-jolly-hall-a8ozofyw-pooler.eastus2.azure.neon.tech/AI-content-generator?sslmode=require"
    }
}