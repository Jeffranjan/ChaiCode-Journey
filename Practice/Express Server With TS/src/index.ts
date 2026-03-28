import { create } from "node:domain";
import http, { createServer } from "node:http";

async function main() {
  try {
    const server = http.createServer();
    const PORT: number  = process.env.PORT ?? 8080;
  } catch (err) {}
}
