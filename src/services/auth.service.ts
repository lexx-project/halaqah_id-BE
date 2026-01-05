import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as userRepo from "../repositories/user.repository";

export const login = async (data: any) => {
  const user = await userRepo.findByEmail(data.email);

  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    const error: any = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is missing");
  }

  const token = jwt.sign({ id: user.id_user, role: user.role }, jwtSecret, {
    expiresIn: "7d",
  });

  const { password: _, ...userResponse } = user;

  return { user: userResponse, token };
};
