export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.idxbroker.com/clients/active", {
      method: "GET",
      headers: {
        "accesskey": process.env.IDX_API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
        "outputtype": "json"
      }
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch IDX listings", details: error.message });
  }
}
