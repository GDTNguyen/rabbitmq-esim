import { Router } from "express";

const router = Router();

// In-memory store (replace with DB later)
const users = new Map();
let nextId = 1;

// GET /v1/users
router.get("/", (req, res) => {
	const list = Array.from(users.entries()).map(([id, u]) => ({ id: Number(id), ...u }));
	res.json(list);
});

// POST /v1/users  { name: string, email?: string }
router.post("/", (req, res, next) => {
	try {
		const { name, email } = req.body || {};
		if (!name || typeof name !== "string") {
			return res.status(400).json({ error: "name is required" });
		}
		const id = nextId++;
		const user = { name, email: email ?? null, createdAt: new Date().toISOString() };
		users.set(id, user);
		res.status(201).json({ id, ...user });
	} catch (err) {
		next(err);
	}
});

// GET /v1/users/:id
router.get("/:id", (req, res) => {
	const id = Number(req.params.id);
	if (!users.has(id)) return res.status(404).json({ error: "User not found" });
	res.json({ id, ...users.get(id) });
});

// DELETE /v1/users/:id
router.delete("/:id", (req, res) => {
	const id = Number(req.params.id);
	if (!users.has(id)) return res.status(404).json({ error: "User not found" });
	users.delete(id);
	res.status(204).send();
});

export default router;
