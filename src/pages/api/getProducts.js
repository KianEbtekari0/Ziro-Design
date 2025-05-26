export default async function handler(req, res) {
  const token = process.env.GUMROAD_ACCESS_TOKEN; // set this in Vercel later

  try {
    const response = await fetch('https://api.gumroad.com/v2/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Failed to fetch' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
