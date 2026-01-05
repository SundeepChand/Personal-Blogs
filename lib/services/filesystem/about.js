import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export async function getAboutInfo() {
  try {
    const aboutContentPath = path.join(process.cwd(), 'data', 'page_contents', 'about-me.yaml');

    const aboutContent = fs.readFileSync(aboutContentPath);

    const aboutContentParsed = yaml.load(aboutContent);

    return aboutContentParsed;
  } catch (error) {
    console.log(error);
  }
}