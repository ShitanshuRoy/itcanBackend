/**
 * Represents an error that should return a particular response code, and optionally a message and
 * some data.
 *
 * `message` and `statusCode` arguments are required. It must be a code between 400 to 599 inclusive.
 */
export class ApplicationError extends Error {
  constructor(message, statusCode, data) {
    super(message);
    if (!message || !statusCode) {
      throw new Error("message and statusCode must be provided");
    }

    if (statusCode < 400 || statusCode >= 600) {
      throw new Error(
        "statusCode must be a number between 400 and 599 inclusive"
      );
    }

    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}
