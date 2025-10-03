export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.idxbroker.com/clients/featured", {
      method: "GET",
      headers: {
        "accesskey": process.env.IDX_API_TOKEN,
        "outputtype": "json"
      }
    });

    const text = await response.text();
    res.status(200).send({
      status: response.status,
      body: text
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}