import { NextFunction, Request, Response, Router } from "express";
import { requestLog as requestLog2 } from "../../middleware/basicMiddleware/requestLog";

const router = Router();

// Basic API - GET
// APIs (Application Programming Interfaces) are like waiters in a restaurant; they take requests and bring responses.
// This route is a simple GET API that responds with a "Hello World!" message, introducing basic API functionality.
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET with Query Parameters
// Query parameters allow sending small pieces of data through the URL, like adding toppings to a pizza order.
// This route takes a "name" as a query parameter and responds with a greeting using that name.
router.get("/greet", (req, res) => {
  const { name } = req.query;
  res.send(`Hello, ${name}!`);
});

// Middleware example for logging requests
// Middleware is like a security guard that checks every guest before entering a party. It processes requests before reaching the main handler.
// This middleware logs the request method and URL to the console, demonstrating basic middleware functionality.
const requestLog = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};

// Route using requestLog middleware
// This route uses the requestLog middleware to log details of incoming requests before responding.
router.get("/log", requestLog, (req: Request, res: Response) => {
  res.send("Request has been logged");
});

// Middleware function to check query content
// Queries are like questions asked in the URL, and middleware can ensure that required data is present.
// This middleware checks if the query contains a "value" field and ensures it's present before processing the request.
const checkQuery = (req: Request, res: Response, next: NextFunction) => {
  const { value } = req.query;
  if (!value) {
    return res.status(400).send("No value provided in query");
  }
  next();
};

// GET with Middleware and query content
// This route uses the checkQuery middleware to ensure the query has a "value" before sending a response.
router.get("/check", checkQuery, (req, res) => {
  const { value } = req.query;
  res.send(`Value is ${value}`);
});

// Using external middleware (requestLog)
// Middleware functions are often kept in separate files for better organization, like tools kept in a toolbox.
// This route shows how to use imported middleware from another file to keep the code clean and manageable.
router.get("/log2", requestLog2, (req: Request, res: Response) => {
  res.send("Request has been logged using external middleware");
});

export default router;
