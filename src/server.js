import express from "express";
import api from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in body parser (no extra deps)
app.use(express.json());

// Mount API
app.use("/v1", api);

// 404 handler (keep it simple)
app.use((req, res) => {
	res.status(404).json({ error: "Not Found" });
});

// Centralized error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	console.error(err); // basic logging
	const status = err.status || 500;
	res.status(status).json({ error: err.message || "Internal Server Error" });
});

app.listen(PORT, () => {
	console.log(`API listening on http://localhost:${PORT}`);
});
