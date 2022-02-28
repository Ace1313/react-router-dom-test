import { useState } from 'react';
import styled from 'styled-components';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
   const [isAddingComment, setIsAddingComment] = useState(false);

   const startAddCommentHandler = () => {
      setIsAddingComment(true);
   };

   return (
      <Wrapper>
         <section className="comments">
            <h2>User Comments</h2>
            {!isAddingComment && (
               <button className="btn" onClick={startAddCommentHandler}>
                  Add a Comment
               </button>
            )}
            {isAddingComment && <NewCommentForm />}
            <p>Comments...</p>
         </section>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   .comments {
      text-align: center;
   }

   .comments > button {
      font-size: 1.25rem;
   }
`;

export default Comments;
