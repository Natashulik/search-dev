import { GithubUser } from "../types/user";
import { Follower } from "../types/follower";

export const fetchFollowers = async (user: GithubUser | null, perPage: number, page: number) => {
  if (user) {
    const res = await fetch(`${user.followers_url}?per_page=${perPage}&page=${page}`);
    const followers = await res.json() as Follower[];
    const formattedFollowers: Follower[] = followers.map(item => ({
      login: item.login,
      avatar_url: item.avatar_url,
      html_url: item.html_url

    }))
    return formattedFollowers;
  }
}