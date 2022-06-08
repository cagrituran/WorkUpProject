
import Axios from "axios";
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';






const Sharepost = () => {
    // const navigate = useNavigate();
    //https://localhost:7079/api/Post
    //https://localhost:7079/api/PostLike/LikeSave
    const url = "https://localhost:7079/api/Post/AddUserPost"
    const[post ,setPost] = useState({
        postTitle:"",
        publisherId:0
    })
    function submitPost(e){
        e.preventDefault();
       Axios.post(url,{
           postTitle:post.postTitle,
           publisherId:JSON.parse(localStorage.getItem('User')).id
           
       }).then(res=>{
        //    console.log(res.data) 
        
           
           console.log(res)
           window.location.reload();
        
        //    navigate('/home'); 
                                            
       }).catch(function(error){
           if(error.response){
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
           }
       })
    }
    function handleWrite(e){
        const newdata = {...post}
        newdata[e.target.id]=e.target.value
        setPost(newdata)
        console.log(newdata)
    
    }
    return (
    
    <div className="card gedf-card">
      <form onSubmit={(e)=>submitPost(e)}>
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
              a publication
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div className="tab-content" id="myTabContent">
            
          <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
            
            <div className="form-group">
                <label className="sr-only" htmlFor="postTitle">post</label>
                <textarea onChange={(e)=> handleWrite(e)} className="form-control" id="postTitle" rows="3" placeholder="What are you thinking?"></textarea>
              </div>
          </div>
          
          <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
            <div className="form-group">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label" htmlFor="customFile">Upload image</label>
              </div>
            </div>
            <div className="py-4"></div>
          </div>
        </div>
        <div className="btn-toolbar justify-content-between">
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">share</button>
          </div>
          <div className="btn-group">
            <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-globe"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#"><i className="fa fa-globe"></i> Public</a>
                <a className="dropdown-item" href="#"><i className="fa fa-users"></i> Friends</a>
                <a className="dropdown-item" href="#"><i className="fa fa-user"></i> Just me</a>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
    )
}
export default Sharepost;