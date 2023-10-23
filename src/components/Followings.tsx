
import { useEffect } from "react";
import { GithubUser } from "../types/user";
import { Following } from "../types/following"
import { ReactComponent as IconClose } from "../assets/close.svg";
import { fetchFollowings } from "../helpers/fetchFollowings";

interface FollowingProps {
  user: GithubUser,
  followings: Following[] | null,
  setIsFollowingsShown: React.Dispatch<React.SetStateAction<boolean>>,
  setFollowings: React.Dispatch<React.SetStateAction<Following[] | null>>,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Followings = ({ followings, setIsFollowingsShown, setFollowings, user, page, setPage }: FollowingProps) => {

  const handleFollowingClose = () => {
    setIsFollowingsShown(false);
  }

  const handleFollowingsScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const newFollowings = await fetchFollowings(user, 50, page);
      console.log(newFollowings);
      if (newFollowings && followings) {
        setFollowings([...followings, ...newFollowings]);
        setPage(page + 1);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleFollowingsScroll);
    return () => window.removeEventListener('scroll', handleFollowingsScroll);
  }, [page]);

  return <div className="following_container fade-in ">
    <h2 className="followings_main_title"> Followings </h2>
    <IconClose className="close_icon" onClick={handleFollowingClose} />
    {followings && followings.map((item, index) => (
      <div key={index} className="following_item">
        <h3 className="following_name">
          <a className="following_link" href={item.html_url}>@{item.login}</a>
        </h3>
        <img className="following_avatar"
          src={item.avatar_url}
          alt={item.login} />
      </div>
    ))}
  </div>
}
