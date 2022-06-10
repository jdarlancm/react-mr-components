import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.findName()} 
                    timeAgo="Today at 4:30PM" 
                    content={faker.lorem.sentence()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.findName()} 
                    timeAgo="Today at 2:00AM" 
                    content="I like the subject"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.findName()} 
                    timeAgo="Yesterday at 1:30PM" 
                    content="I like the writing"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));