import React from "react";
import { Navigate, useParams } from "react-router-dom";

// Leaving as place holder for messagees and friends.
// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';
// import FriendList from '../components/FriendList';

//change import below to useQuery, useMutation is necessary
import { useQuery } from "@apollo/client";
// import { QUERY_USER, QUERY_ME } from "../utils/queries";
//import { ADD_FRIEND } from '../utils/mutations';
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  //  another placeholder for adding friend
  //   const [addFriend] = useMutation(ADD_FRIEND);
  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};

  // navigate to personal home page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       Please log in if you want to get STUMPED!. Use the navigation links
  //       above to sign up or log in!
  //     </h4>
  //   );
  // }

  // const handleClick = async () => {
  //   try {
  //     await addFriend({
  //       variables: { id: user._id },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      <div className="flex-row mb-3">
        {/* <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2> */}

        {/* {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )} */}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          {/* <ThoughtList
            trivia={user.thoughts}
            title={`${user.username}'s thoughts...`}
          /> */}
        </div>

        <div className="col-12 col-lg-3 mb-3">
          {/* <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          /> */}
        </div>
      </div>
      {/* <div className="mb-3">{!userParam && <ThoughtForm />}</div> */}
    </div>
  );
};

export default Profile;
