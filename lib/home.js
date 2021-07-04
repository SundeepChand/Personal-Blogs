import { getHomeInfo } from "./services/home";

export async function getHomeData() {
  const { hero } = await getHomeInfo();
  return hero;
}
