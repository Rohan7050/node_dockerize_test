// const express = require('express');
import express, { NextFunction, Request, Response, json } from "express";
// const redis = require('redis');

const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response, _next: NextFunction) => {
  return res.json({
    msg: "welcome",
  });
});

app.get("/r2", (req: Request, res: Response, _next: NextFunction) => {
  return res.json({
    msg: "welcome on new route",
  });
});

app.get("/r3", (req: Request, res: Response, _next: NextFunction) => {
  return res.json({
    msg: "welcome on new route 3",
  });
});

app.get("/r4", (req: Request, res: Response, _next: NextFunction) => {
  return res.json({
    msg: "welcome on new route 4",
  });
});

app.get("/r5", (req: Request, res: Response, _next: NextFunction) => {
  process.exit(1);
  return res.json({
    msg: "welcome on new route 5555",
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
