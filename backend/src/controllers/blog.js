import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getBlog = async (req, res) => {
  const GUARDIAN_API_URL = "https://content.guardianapis.com/search";
  const GUARDIAN_API_KEY = process.env.GUARDIAN_API_KEY;
  try {
    const response = await axios.get(GUARDIAN_API_URL, {
      params: {
        "api-key": GUARDIAN_API_KEY,
        q: "mental-health",
      },
    });
    res.status(200).json(response.data.response.results);
  } catch (error) {
    console.error("Error in getBlog:", error);
    res.status(500).json({ error: "Failed to get blog posts" });
  }
};

export { getBlog };
