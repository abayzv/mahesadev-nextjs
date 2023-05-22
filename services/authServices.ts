import db from "../utils/db";
import { hashToken } from "../utils/hashToken";

const addRefreshToken = async (jti: string, token: string, userId: string) => {
  const hashedToken: any = hashToken(token);

  await db.refreshToken.create({
    data: {
      id: jti,
      hashedToken,
      userId,
    },
  });
};

const findRefreshTokenById = async (id: string) => {
  const refreshToken = await db.refreshToken.findUnique({
    where: {
      id,
    },
  });

  return refreshToken;
};

const deleteRefreshTokenById = async (id: string) => {
  await db.refreshToken.delete({
    where: {
      id,
    },
  });
};

const revokeRefreshToken = async (userId: string) => {
  return db.refreshToken.updateMany({
    where: {
      userId,
    },
    data: {
      revoked: true,
    },
  });
};

export {
  addRefreshToken,
  findRefreshTokenById,
  deleteRefreshTokenById,
  revokeRefreshToken,
};
