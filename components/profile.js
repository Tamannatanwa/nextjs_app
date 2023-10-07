import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const searchparams = useSearchParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const username = searchparams.get("username");
    if (username == null) return;
    axios.get(`https://api.github.com/users/${username}`).then((data) => {
      setUser(data.data);
      // console.log(data.data);
    });
  }, [searchparams]);

  if (!user) {
    return;
  }
  return (
    <>
    {/* // <center> */}
      <img style={{borderRadius: "100%", border: "4px solid black"}} src={user.avatar_url}/>
      <h4>Total Followers: {user.followers}</h4>
      <h1>Welcome {user.name || user.login}</h1>
      <h2>{user.login}</h2>
      <button style={{width:"400px",height:"40px",borderRadius:'8px'}}>Follow</button>
      <h3>{user.bio}</h3>
      <div>
        <h4>{user.followers} Followers {user.following} Following</h4>
      </div>
      <h3>{user.company}</h3>
      <h3>{user.location}</h3>
      <h3>{user.blog}</h3>
      <h3>{user.twitter_username}</h3>
      <hr/>
      <h1>Achievements</h1>
    {/* // </center> */}
    </>
  );
}
