import { useEffect } from "react";
import { GithubUser } from "../types/user";
import { Follower } from "../types/follower";
import { ReactComponent as IconClose } from "../assets/close.svg";
import { fetchFollowers } from "../helpers/fetchFollowers";

interface FollowersProps {
  user: GithubUser
  followers: Follower[] | null,
  setFollowers: React.Dispatch<React.SetStateAction<Follower[] | null>>,
  setIsFollowersShown: React.Dispatch<React.SetStateAction<boolean>>,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
}

export const Followers = ({ followers, setIsFollowersShown, page, user, setFollowers, setPage }: FollowersProps) => {

  const handleFollowersClose = () => {
    setIsFollowersShown(false);
  }

  const handleFollowersScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const newFollowers = await fetchFollowers(user, 50, page);
      console.log(newFollowers);
      if (newFollowers && followers) {
        setFollowers([...followers, ...newFollowers]);
        setPage(page + 1);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleFollowersScroll);
    return () => window.removeEventListener('scroll', handleFollowersScroll);
  }, [page]);

  return <div className="followers_container fade-in ">
    <h2 className="followers_main_title"> Followers </h2>
    <IconClose className="close_icon" onClick={handleFollowersClose} />
    {followers && followers.map((item, index) => (
      <div key={index} className="follower_item">
        <h3 className="follower_name">
          <a className="follower_link" href={item.html_url}>@{item.login}</a>
        </h3>
        <img className="follower_avatar"
          src={item.avatar_url}
          alt={item.login} />
      </div>
    ))}
  </div>
}

