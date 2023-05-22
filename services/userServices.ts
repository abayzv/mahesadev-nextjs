import bcrypt from "bcrypt";
import db from "../utils/db";

const findUserByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

const createUserByEmail = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return user;
};

export { findUserByEmail, createUserByEmail };
