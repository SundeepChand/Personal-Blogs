import { getAboutInfo } from "./services/filesystem/about";

export async function getAboutData() {
  const about = await getAboutInfo();
  return about;
}
