import config from "@/lib/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

console.log("Initializing Neon with:", config.env.dbUrl);

const sql = neon(config.env.dbUrl)

export const db = drizzle({ client: sql, casing: "snake_case" });