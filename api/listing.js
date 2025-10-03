export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.insiderealestate.com/idx/v1/listings/active", {
      headers: {
        "Authorization": "Bearer " + process.env.IDX_API_TOKEN,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}