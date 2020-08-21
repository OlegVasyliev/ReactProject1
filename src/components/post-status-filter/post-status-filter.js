import React from "react";
import { Button } from 'react-bootstrap';

import "./post-status-filter.css";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
        <Button variant="outline-info">Всі</Button>
        <Button variant="outline-info">Сподобалось</Button>
    </div>
  );
};


export default PostStatusFilter;