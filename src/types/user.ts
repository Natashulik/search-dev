export type GithubUser = {
  login: string,
  avatar_url: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  public_repos: number,
  repos_url: string,
  followers: number,
  followers_url: string,
  following: number,
  following_url: string,
  created_at: string,
}

export type GithubError = {
  message: string,
  documentation_url: string,
}
