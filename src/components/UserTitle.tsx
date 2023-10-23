import { GithubUser } from "../types/user";
import { localDate } from "../helpers/locateDate";

interface UserTitleProps extends Pick<GithubUser, 'name' | 'login' | 'created_at'> { }

export const UserTitle = ({ name, login, created_at }: UserTitleProps) => {
  const formatedDate = localDate.format(new Date(created_at));

  return <div className='user_title'>
    <h2 className='user_title_item'>{name}</h2>
    <span className='user_title_item'>Registered {formatedDate}</span>
    <h3 className='user_title_item'>@ {login}</h3>
  </div>
}