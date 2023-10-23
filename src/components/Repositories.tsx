import { useEffect } from "react";
import { Repository } from "../types/repository";
import { localDate } from "../helpers/locateDate";
import { ReactComponent as IconClose } from "../assets/close.svg";
import { fetchRepos } from '../helpers/fetchERepos';
import { GithubUser } from "../types/user";

interface RepositoriesProps {
  repos: Repository[] | null,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  user: GithubUser,
  setRepos: React.Dispatch<React.SetStateAction<Repository[] | null>>,
  setIsReposShown: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFollowersShown: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFollowingsShown: React.Dispatch<React.SetStateAction<boolean>>,
  page: number
}

export const Repositories = ({ repos, setIsReposShown, setPage, user, page, setRepos,
  setIsFollowersShown, setIsFollowingsShown }: RepositoriesProps) => {

  const handleReposClose = () => {
    setIsReposShown(false);
  }

  const handleReposScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const newRepos = await fetchRepos(user, 50, page);
      console.log(newRepos)
      if (newRepos && repos) {
        setRepos([...repos, ...newRepos]);
        setPage(page + 1)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleReposScroll);
    return () => window.removeEventListener('scroll', handleReposScroll);
  }, [page]);

  return <div className="repos_container fade-in">
    <h2 className="repos_main_title"> User's repositories </h2>
    <IconClose className="close_icon" onClick={handleReposClose} />

    {repos && repos.map((item, index) => (
      <div key={index} className="repos_item">
        <div className="repos_info">
          <h3 className="repos_title">{item.name} </h3>
          <div className="repos_status"> {item.private ? 'private' : 'public'} </div>
        </div>
        <p className="repos_created">created: {localDate.format(new Date(item.created_at))}</p>
        <a className="repos_link" href={item.html_url}>{item.html_url}</a>
      </div>
    ))}
      </div>
}