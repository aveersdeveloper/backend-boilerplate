import { Request, Response, Router } from "express";

const router = Router();

// Exercise 1: Forbidden Response
// Task: Create a GET route that returns a "Forbidden" status when access to the resource is restricted.
// Use the response code list to find the appropriate code. This exercise helps you understand how to handle access restrictions in your API.

// Exercise 2: Internal Server Error
// Task: Create a GET route that simulates a "Internal Server Error" response.
// Use the response code list to determine the correct status code. This will help you understand how to handle unexpected issues in your API.

// Exercise 3: Not Modified
// Task: Create a GET route that returns a "Not Modified" response when the requested resource has not changed since the last request.
// Refer to the response code list to find the exact code. This is often used with caching but is useful for understanding resource checks.

// Exercise 4: Teapot Response
// Task: Create a fun GET route that returns a "Teapot" response. This is a playful and rarely used status code.
// Find the code in the response code list and use it creatively in your implementation!

export default router;
