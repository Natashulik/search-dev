import { GithubUser } from '../types/user';
import { Repository } from '../types/repository';

export const fetchRepos = async (user: GithubUser | null, perPage: number, page: number) => {
  if (user) {
    const res = await fetch(`${user.repos_url}?per_page=${perPage}&page=${page}`);
    const repositories = await res.json() as Repository[];
    const formattedRepositories: Repository[] = repositories.map(item => ({
      name: item.name,
      private: item.private,
      html_url: item.html_url,
      created_at: item.created_at
    }))
    return formattedRepositories;
  }
}