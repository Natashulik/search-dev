import { GithubUser } from "../types/user";
import { Repository } from "../types/repository";
import { UserInfo } from "./UserInfo";
import { Statistics } from "./Statistics";
import { UserTitle } from "./UserTitle";
import { Follower } from "../types/follower";
import { Following } from "../types/following";

export interface CardProps {
  user: GithubUser,
  setRepos: React.Dispatch<React.SetStateAction<Repository[] | null>>,
  setIsReposShown: React.Dispatch<React.SetStateAction<boolean>>,
  setFollowers: React.Dispatch<React.SetStateAction<Follower[] | null>>,
  setIsFollowersShown: React.Dispatch<React.SetStateAction<boolean>>,
  setFollowings: React.Dispatch<React.SetStateAction<Following[] | null>>,
  setIsFollowingsShown: React.Dispatch<React.SetStateAction<boolean>>,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
}

export const Card = ({ user, setRepos, setIsReposShown, setFollowers, setIsFollowersShown,
  setFollowings, setIsFollowingsShown, page, setPage }: CardProps) => {
 
  return <div className='user_card'>
    <img className="avatar"
      src={user.avatar_url}
      alt={user.login} />

    <UserTitle
      login={user.login}
      created_at={user.created_at}
      name={user.name} />

    <div className={`${user.bio ? 'info' : 'info empty'}`}>
      {user.bio || 'No additional information'}
    </div>

    <UserInfo blog={user.blog} company={user.company} location={user.location} />

    <Statistics user={user} setRepos={setRepos} setIsReposShown={setIsReposShown}
      setFollowers={setFollowers} setIsFollowersShown={setIsFollowersShown}
      setFollowings={setFollowings} setIsFollowingsShown={setIsFollowingsShown}
      page={page} setPage={setPage} />
  </div>
}