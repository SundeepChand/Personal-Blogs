import { getHomeInfo } from "./services/filesystem/home";

export async function getHomeData() {
  return await getHomeInfo();
}
