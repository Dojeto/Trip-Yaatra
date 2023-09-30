import path from "path";
import { promises as fs } from "fs";

const tripsHanddler = async (req, res) => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const filePath = path.join(jsonDirectory, "/trips.json");
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(fileContents);
    res.status(200).json(jsonData);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default tripsHanddler;
