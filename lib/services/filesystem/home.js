import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export async function getHomeInfo() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'page_contents', 'home-content.yaml');

    const fileContents = fs.readFileSync(filePath, 'utf8');

    const data = yaml.load(fileContents);

    return data;

  } catch (error) {
    console.error(error);
  }
}