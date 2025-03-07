export const greet = (req, res) => {
    const { name } = req.query;
    try {
      if (!name) {
        return res.status(400).json({ error: "Name is required." });
      }
      res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
    } catch (err) {
      res.json(err);
    }
  }