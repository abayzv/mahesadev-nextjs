import bcrypt from "bcrypt";
import db from "../utils/db";

export interface User {
  email: string;
  password: string;
}

export interface Passenger {
  name: string;
  phone: string;
  identityType: string;
  identityNumber: string;
  gender: string;
  birthDate: Date;
}

const findUserByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    include: {
      passengers: true,
    },
  });

  return user;
};

const createUserByEmail = async ({
  userdata,
  passenger,
}: {
  userdata: User;
  passenger: Passenger;
}) => {
  const { email, password } = userdata;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  const passengers = await db.passenger.create({
    data: {
      name: passenger.name,
      phone: passenger.phone,
      identityType: passenger.identityType,
      identityNumber: passenger.identityNumber,
      gender: passenger.gender,
      birthDate: passenger.birthDate,
      userId: user.id,
    },
  });

  return { user, passengers };
};

export { findUserByEmail, createUserByEmail };
