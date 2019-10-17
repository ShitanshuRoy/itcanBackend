import jwt from "jsonwebtoken";

import { getEnv } from "./env";

// NOTE: errors if JWT_TOKEN_SECRET isn't present, if on production
// server; otherwise uses "fake_secret" as the secret.
const JWT_SECRET =
  getEnv("NODE_ENV") !== "production"
    ? "fake_secret"
    : getEnv("JWT_SECRET", true);

// TODO: feel free to add more arguments to this function and generate a
// JSON web token with more members than just the id.
/**
 * Generates a new JSON web token, signing it with our secret.
 */
export function generateToken(id) {
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, JWT_SECRET, { expiresIn: "7 days" }, (err, token) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
}

/**
 * Verifies a JSON web token and decodes it into its contents. Ensures that:
 * - the payload of the token matches correct secret (it's from us)
 * - the token isn't expired
 */
export function decodeToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(decoded);
    });
  });
}
