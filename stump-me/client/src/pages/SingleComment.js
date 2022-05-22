import React from 'react';
import { useParams } from 'react-router-dom';

// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT } from '../utils/queries';

const SingleComment = (props) => {
  const { id: commentId } = useParams();

  const { loading, data } = useQuery(QUERY_COMMENT, {
    variables: { id: commentId },
  });

  const comment = data?.comment || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {comment.username}
          </span>{' '}
          comment on {comment.createdAt}
        </p>
        <div className="card-body">
          <p>{comment.commentText}</p>
        </div>
      </div>

      {/* {comment.reactionCount > 0 && (
        <ReactionList reactions={comment.reactions} />
      )}

      {Auth.loggedIn() && <ReactionForm commentId={comment._id} />} */}
    </div>
  );
};

export default SingleComment;
