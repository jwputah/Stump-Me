import React from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_ME_BASIC } from '../utils/queries';
//add QUERY_COMMENTS in line above once comments are active

const Home = () => {
  const { loading, data } = useQuery(QUERY_COMMENTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const comments = data?.comments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <CommentForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CommentList
              comments={comments}
              title="Time to talk some trash..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
