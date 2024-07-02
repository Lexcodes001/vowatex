// lib/corsMiddleware.js
import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  origin: "https://vowatex.com", // Allow requests from this domain
  methods: ["GET", "POST", "OPTIONS"], // Allowed methods
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export { cors, runMiddleware };
