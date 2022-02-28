import CommentItem from './CommentItem';
import styled from 'styled-components';
const CommentsList = (props) => {
   return (
      <Wrapper>
         <ul className="comments">
            {props.comments.map((comment) => (
               <CommentItem key={comment.id} text={comment.text} />
            ))}
         </ul>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   .comments {
      list-style: none;
      margin: 2.5rem 0;
      padding: 0;
   }
`;

export default CommentsList;
