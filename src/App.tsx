import React, { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { defaultUser } from './types/defaultUser'
import { isGithubUser } from './helpers/typeguards';
import { GithubError, GithubUser } from './types/user';
import { Repository } from './types/repository';
import { Repositories } from './components/Repositories';
import { Followers } from './components/Followers';
import { Followings } from './components/Followings';
import { Follower } from './types/follower';
import { Following } from './types/following';

function App() {
  const [user, setUser] = useState<GithubUser | null>(defaultUser);
  const [repos, setRepos] = useState<Repository[] | null>(null);
  const [isReposShown, setIsReposShown] = useState<boolean>(false);
  const [followers, setFollowers] = useState<Follower[] | null>(null);
  const [isFollowersShown, setIsFollowersShown] = useState<boolean>(false);
  const [followings, setFollowings] = useState<Following[] | null>(null);
  const [isFollowingsShown, setIsFollowingsShown] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const fetchUser = async (username: string) => {
    const url = process.env.REACT_APP_BASE_URL + username;
    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;
    if (isGithubUser(user)) {
      setUser(user);
    } else {
      setUser(null);
    }
  }

  return <Container>

    <Header />
    
    <Input hasError={!user} onSubmit={fetchUser} setIsReposShown={setIsReposShown}
      setIsFollowersShown={setIsFollowersShown} setIsFollowingsShown={setIsFollowingsShown}
      setPage={setPage} />

    {user && (<Card user={user} setRepos={setRepos} setIsReposShown={setIsReposShown}
      setFollowers={setFollowers} setIsFollowersShown={setIsFollowersShown}
      setFollowings={setFollowings} setIsFollowingsShown={setIsFollowingsShown}
      page={page} setPage={setPage} />)}

    {user && isReposShown && <Repositories repos={repos} setIsReposShown={setIsReposShown} setPage={setPage}
      user={user} page={page} setRepos={setRepos} setIsFollowersShown={setIsFollowersShown} 
      setIsFollowingsShown={setIsFollowingsShown} />}

    {user && isFollowersShown && <Followers followers={followers} setIsFollowersShown={setIsFollowersShown}
      page={page} setPage={setPage} user={user} setFollowers={setFollowers} />}

    {user && isFollowingsShown && <Followings followings={followings} setIsFollowingsShown={setIsFollowingsShown}
      page={page} setPage={setPage} user={user} setFollowings={setFollowings} />}

  </Container>
}

export default App;
