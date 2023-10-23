import { GithubUser } from "../types/user";
import { Following } from "../types/following";

export const fetchFollowings = async (user: GithubUser | null, perPage: number, page: number) => {
  if (user) {
    const url = `${process.env.REACT_APP_BASE_URL}${user.login}/following?per_page=${perPage}&page=${page}`;
    const res = await fetch(url);
    const followings = await res.json() as Following[];
    const formattedFollowings: Following[] = followings.map(item => ({
      login: item.login,
      avatar_url: item.avatar_url,
      html_url: item.html_url

    }))
    return formattedFollowings;
  }
}