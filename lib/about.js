import { getAboutInfo } from "./services/about";

export async function getAboutData() {
  const about = await getAboutInfo();
  return about;
}
