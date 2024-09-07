import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://budget_buddy_owner:VRGTh3D5kflS@ep-red-hill-a5me88hc.us-east-2.aws.neon.tech/budget-buddy?sslmode=require"
);
export const db = drizzle(sql, { schema });