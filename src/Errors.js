export class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}

export const errorMessages = {
  UNAUTHORIZED: 'Unauthorized: Invalid or expired access token.',
  FORBIDDEN: 'Forbidden: You do not have permission to access this resource.',
  RATE_LIMIT: 'Too Many Requests: Rate limit exceeded.',
  UNKNOWN: 'An unknown error occurred.',
  NO_PRODUCTS: 'No products found for this account.',
  CONNECTION: 'CONECTIVITY ISSUE. PROHIBITED LOCATION OR NO INTERNTE CONNECTION'
};
