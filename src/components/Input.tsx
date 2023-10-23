import { ReactComponent as SeacrhIcon } from "../assets/search.svg";

interface InputProps {
  hasError: boolean,
  onSubmit: (txt: string) => void,
  setIsReposShown: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFollowersShown: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFollowingsShown: React.Dispatch<React.SetStateAction<boolean>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
}

export const Input = ({ hasError, onSubmit, setIsReposShown, setIsFollowersShown,
  setIsFollowingsShown, setPage }: InputProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
    setIsFollowersShown(false);
    setIsFollowingsShown(false);
    setIsReposShown(false);
    setPage(1);
  }

  return <form className='form' onSubmit={handleSubmit} autoComplete='off' >
    <div className='search'>
      <label className='label' htmlFor='search'>
        <SeacrhIcon className="search_icon" />
      </label>
      <input className='input' type='text' id='search;' name='username'
        placeholder='Enter username...' />
      {hasError && (<div className='error'> No result</div>)}
      <button className="button"> Search</button>
    </div>
  </form>
}