import pool from "../config/database";
import { z } from "zod";

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

// Define zod schema for user object runtime validation
export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  created_at: z.date(),
  updated_at: z.date(),
});

// Define Type for User object
export type IUserSchema = z.infer<typeof userSchema>;


class User {
  static async findByEmail(email: string): Promise<IUser | null> {
    try {
      const result = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (result.rows.length === 0) return null;
      return userSchema.parse(result.rows[0]);
    } catch (error) {
      console.error("Database error", error);
      throw new Error("Error fetching user by email");
    }
  }

  static async create(user: {
    username: string;
    email: string;
    passwordHash: string;
  }): Promise<IUser> {
    try {
      const result = await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [user.username, user.email, user.passwordHash]
      );
      return userSchema.parse(result.rows[0]);
    } catch (error) {
      console.error("Database error", error);
      throw new Error("Error creating user");
    }
  }
}

export default User;