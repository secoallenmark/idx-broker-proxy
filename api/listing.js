export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.idxbroker.com/clients/featured", {
      method: "GET",
      headers: {
        "accesskey": process.env.IDX_API_TOKEN,
        "outputtype": "json"
      }
    });

    if (!response.ok) {
      throw new Error(`IDX API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}