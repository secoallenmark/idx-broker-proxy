export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.insiderealestate.com/idx/v1/listings/active", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${process.env.IDX_API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}