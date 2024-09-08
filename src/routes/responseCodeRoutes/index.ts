import { Request, Response, Router } from "express";

const router = Router();

// Example 1: Successful Response - 200 OK
// A 200 status code indicates a successful request.
// This route demonstrates a simple GET request returning a 200 OK status with a success message.
router.get("/success", (req: Request, res: Response) => {
  res.status(200).send("Request was successful!");
});

// Example 2: Not Found Response - 404 Not Found
// A 404 status code indicates that the resource requested could not be found.
// This route demonstrates a GET request where the requested resource does not exist, returning a 404 status.
router.get("/not-found", (req: Request, res: Response) => {
  res.status(404).send("Resource not found.");
});

// Example 3: Unauthorized Response - 401 Unauthorized
// A 401 status code indicates that the user is not authorized to access the requested resource.
// This route demonstrates how to use the 401 status code to handle unauthorized access.
router.get("/unauthorized", (req: Request, res: Response) => {
  res.status(401).send("You are not authorized to access this resource.");
});

export default router;
