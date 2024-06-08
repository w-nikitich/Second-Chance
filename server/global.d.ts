declare namespace Express {
  export interface Request {
    user?: any; // inserted while jwt verification
  }
}
