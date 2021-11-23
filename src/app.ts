import express from "express";
import http from "http"
import { router } from "./routes/routes";

const app = express()

app.use(express.json())

app.use('/', router)

export const serverHttp = http.createServer(app)
