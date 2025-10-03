export default async function handler(req, res) {
  try {
    res.status(200).json({ token: process.env.IDX_API_TOKEN });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}