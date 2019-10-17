/**
 * Helpers for accessing environment variables
 */

/**
 * Get environment variable. If required is truthy, will throw
 * an error if the environment variable isn't present.
 */
export function getEnv(envVariableName, required = false) {
  const value = process.env[envVariableName];
  if (required && !value) {
    throw new Error(
      `Missing required environment variable '${envVariableName}'`
    );
  }

  return value;
}
