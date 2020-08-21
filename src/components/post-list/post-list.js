import React from "react";
import "./post-list.css";
import ListGroup from "reactstrap/es/ListGroup";

import PostListItem from "../post-list-item";


const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    });
    return (
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    );
};

export default PostList;
