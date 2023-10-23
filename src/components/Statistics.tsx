import { CardProps } from './Card';
import { fetchRepos } from '../helpers/fetchERepos';
import { fetchFollowers } from '../helpers/fetchFollowers';
import { fetchFollowings } from '../helpers/fetchFollowings';

export interface StatisticsProps extends CardProps { }

export const Statistics = ({ user, setRepos, setIsReposShown, setFollowers, setIsFollowersShown,
  setFollowings, setIsFollowingsShown, page, setPage }: StatisticsProps) => {

  const handleReposClick = async () => {
    const newRepos = await fetchRepos(user, 50, 1);
    if (newRepos) {
      setRepos(newRepos);
      setIsFollowersShown(false);
      setIsFollowingsShown(false);
      setIsReposShown(true);
      setPage(2);
    }
  }

  const handleFollowersClick = async () => {
    const newFollowers = await fetchFollowers(user, 50, 1);
    if (newFollowers) {
      setFollowers(newFollowers);
      setIsReposShown(false);
      setIsFollowingsShown(false);
      setIsFollowersShown(true);
      setPage(2);
    }
  }

  const handleFollowingsClick = async () => {
    const newFollowings = await fetchFollowings(user, 50, 1);
    if (newFollowings) {
      setFollowings(newFollowings);
      setIsReposShown(false);
      setIsFollowersShown(false);
      setIsFollowingsShown(true);
      setPage(2);
    }
  }

  return <div className='statistic'>
    <div className='statistic_info' onClick={handleReposClick}>
      <div className={user.public_repos ? 'info_title' : 'info_title empty'}>Repos </div>
      <div className={user.public_repos ? 'info_number' : 'info_number empty'}>{user.public_repos} </div>
    </div>
    <div className='statistic_info' onClick={handleFollowingsClick}>
      <div className={user.following ? 'info_title' : 'info_title empty'}>Following </div>
      <div className={user.following ? 'info_number' : 'info_number empty'}> {user.following}</div>
    </div>
    <div className='statistic_info' onClick={handleFollowersClick}>
      <div className={user.followers ? 'info_title' : 'info_title empty'}>Followers </div>
      <div className={user.followers ? 'info_number' : 'info_number empty'}>{user.followers} </div>
    </div>
  </div>
}