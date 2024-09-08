import { NextFunction, Request, Response, Router } from "express";

const router = Router();

// Exercise 1: Create a Basic GET Request
// Task: Create a GET API similar to the one in the example, but instead of saying "Hello World!",
// have it respond with a message of your choice, like a greeting or a fun fact.
// This will help understand how to set up a basic GET route and make it personal.

// Exercise 2: GET with Query Parameters
// Task: Create a GET API that takes a query parameter, but instead of using "name", use a different parameter,
// like "city" or "favoriteColor". The response should use this query to create a personalized message.
// This variation helps understand query handling without duplicating the same path.

// Exercise 3: Middleware for Logging Requests
// Task: In the example shown, the request logger middleware logs the request method and URL.
// For this exercise, enhance the middleware to also log the IP address (req.ip) of the client.
// Use the information discussed during the lesson to access and log the required field.
// This will practice expanding middleware functionality using the fields available in the request object.

// Exercise 4: Modularizing the Check Query Middleware
// Task: In the provided example, there's a checkQuery middleware that validates query parameters.
// Move this middleware function to a new file, import it, and reference it in your route.
// This exercise helps practice keeping middleware modular and clean without needing to rewrite the code from scratch.

export default router;
