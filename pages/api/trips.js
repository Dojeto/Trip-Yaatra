import path from "path";
import { promises as fs } from "fs";

const tripsHanddler = async (req,res) => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/trips.json", "utf8");
  const jsonData = JSON.parse(fileContents);
  res.status(200).json(jsonData);
};

export default tripsHanddler;