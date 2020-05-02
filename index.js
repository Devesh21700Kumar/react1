import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
  return (
    
  <div className='ui container comments'>
    <ApprovalCard>
    
      <CommentDetail 
       author="SAM" 
      timeAgo='Today at 4:05PM' 
      content='NICE'
      avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
     <CommentDetail 
     author="JAM" 
     timeAgo='Today at 4:15PM' 
     content='GREAT'
     avatar={faker.image.avatar()}
    />
    </ApprovalCard>
    <ApprovalCard>
     <CommentDetail 
     author="BAM" 
     timeAgo='Today at 4:25PM' 
     content='AWESOME'
     avatar={faker.image.avatar()}
     />
     </ApprovalCard>
   </div>
    );
};

ReactDOM.render
(<App/>,document.querySelector('#root'));