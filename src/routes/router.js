// Defines an express app that runs the boilerplate codebase.

import bodyParser from "body-parser";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { listItems, getItem } from "./items";
import { createCart, getCart } from "./cart";
export default function createRouter() {
  // *********
  // * SETUP *
  // *********

  const router = express.Router();

  // static assets, served from "/public" on the web
  router.use("/public", express.static(path.join(__dirname, "..", "public")));

  router.use(cookieParser()); // parse cookies automatically
  router.use(bodyParser.json()); // parse json bodies automatically

  /**
   * Uncached routes:
   * All routes that shouldn't be cached (i.e. non-static assets)
   * should have these headers to prevent 304 Unmodified cache
   * returns. This middleware applies it to all subsequently
   * defined routes.
   */
  router.get("/*", (req, res, next) => {
    res.set({
      "Last-Modified": new Date().toUTCString(),
      Expires: -1,
      "Cache-Control": "must-revalidate, private"
    });
    next();
  });

  // *****************
  // * API ENDPOINTS *
  // *****************
  router.get("/items", listItems);
  router.get("/item/:id", getItem);
  router.get("/cart/:id", getCart);
  router.put("/createCart", createCart);
  /*
   * sessions endpoints
   */
  // authenticate. Returns a json web token to use with requests.

  return router;
}
