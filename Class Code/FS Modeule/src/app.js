import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./modules/auth/auth.routes.js";
import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);

// Catch-all for undefined routes
app.all("{*path}", (req, res) => {
  throw ApiError.notFound(`Route ${req.originalUrl} not found`);
});

const upload = multer();

app.post("./upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  ApiResponse.ok(res, "File Uploaded");
});

export default app;
