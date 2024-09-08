import { Router } from "express";

const router = Router();

// Basic Hello World route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// 200 OK response
router.get("/ok", (req, res) => {
  res.status(200).send("OK");
});

// 201 Created response
router.post("/created", (req, res) => {
  res.status(201).send("Resource created successfully");
});

// 202 Accepted response
router.post("/accepted", (req, res) => {
  res.status(202).send("Request accepted for processing");
});

// 204 No Content response
router.delete("/no-content", (req, res) => {
  res.status(204).send();
});

// 206 Partial Content response
router.get("/partial-content", (req, res) => {
  res.status(206).send("Partial Content");
});

// 301 Moved Permanently response
router.get("/moved-permanently", (req, res) => {
  res.redirect(301, "https://aveers.com");
});

// 302 Found response
router.get("/found", (req, res) => {
  res.redirect(302, "https://aveers.com");
});

// 304 Not Modified response
router.get("/not-modified", (req, res) => {
  res.status(304).send("Not Modified");
});

// 400 Bad Request response
router.get("/bad-request", (req, res) => {
  res.status(400).send("Bad Request");
});

// 401 Unauthorized response
router.get("/unauthorized", (req, res) => {
  res.status(401).send("Unauthorized");
});

// 402 Payment Required response
router.get("/payment-required", (req, res) => {
  res.status(402).send("Payment Required");
});

// 403 Forbidden response
router.get("/forbidden", (req, res) => {
  res.status(403).send("Forbidden");
});

// 404 Not Found response
router.get("/not-found", (req, res) => {
  res.status(404).send("Not Found");
});

// 405 Method Not Allowed response
router.get("/method-not-allowed", (req, res) => {
  res.status(405).send("Method Not Allowed");
});

// 406 Not Acceptable response
router.get("/not-acceptable", (req, res) => {
  res.status(406).send("Not Acceptable");
});

// 408 Request Timeout response
router.get("/request-timeout", (req, res) => {
  res.status(408).send("Request Timeout");
});

// 409 Conflict response
router.get("/conflict", (req, res) => {
  res.status(409).send("Conflict");
});

// 410 Gone response
router.get("/gone", (req, res) => {
  res.status(410).send("Gone");
});

// 413 Payload Too Large response
router.post("/payload-too-large", (req, res) => {
  res.status(413).send("Payload Too Large");
});

// 414 URI Too Long response
router.get("/uri-too-long", (req, res) => {
  res.status(414).send("URI Too Long");
});

// 415 Unsupported Media Type response
router.post("/unsupported-media-type", (req, res) => {
  res.status(415).send("Unsupported Media Type");
});

// 418 I'm a teapot response (fun)
router.get("/teapot", (req, res) => {
  res.status(418).send("I'm a teapot");
});

// 429 Too Many Requests response
router.get("/too-many-requests", (req, res) => {
  res.status(429).send("Too Many Requests");
});

// 500 Internal Server Error response
router.get("/internal-server-error", (req, res) => {
  res.status(500).send("Internal Server Error");
});

// 501 Not Implemented response
router.get("/not-implemented", (req, res) => {
  res.status(501).send("Not Implemented");
});

// 502 Bad Gateway response
router.get("/bad-gateway", (req, res) => {
  res.status(502).send("Bad Gateway");
});

// 503 Service Unavailable response
router.get("/service-unavailable", (req, res) => {
  res.status(503).send("Service Unavailable");
});

// 504 Gateway Timeout response
router.get("/gateway-timeout", (req, res) => {
  res.status(504).send("Gateway Timeout");
});

// 505 HTTP Version Not Supported response
router.get("/http-version-not-supported", (req, res) => {
  res.status(505).send("HTTP Version Not Supported");
});

export default router;
