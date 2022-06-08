import Axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import LikeButton from "./LikeButton";
const Post = (props) => {
  const url = "https://localhost:7079/api/Post/UpdateUserPost"
  
    const[postc ,setPostc] = useState({
        id:0,
        postTitle:"",
        publisherId:0
    })
  const url2 = "https://localhost:7079/api/PostLike/LikeSave"
  const[likeb ,setLikeb] = useState({
    
    postId:props.postId,
    modifierUserId:JSON.parse(localStorage.getItem("User")).id
     })
  function submitLike(e){
    setLike(like + 1);
    setIsLike(true);
    e.preventDefault()
    
    
    Axios.post(url2,{
      postId:likeb.postId,
      modifierUserId:likeb.modifierUserId
      
  }).then(res=>{
    //    console.log(res.data) 
    
     
       console.log(res)
      //  console.log(props.likers.includes(JSON.parse(localStorage.getItem("User")).id));
      //  window.location.reload();
    
    //    navigate('/home'); 
                                        
   })

  }
    
  const [likers,setLikers] = useState(props.likers);
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(props.postLike),
    [isLike, setIsLike] = useState(false),
    // onLikeButtonClick = (id) => {
    //   setLikeb({postId:id,modifierUserId:JSON.parse(localStorage.getItem("User")).id})
    //   setLike(like + 1);
     
      
    //   setIsLike(!isLike);
      
    // },
    offLikeButtonClick = async() => {
      // Axios.delete(`https://localhost:7079/api/PostLike/LikeRemove`,{postId: props.postId,
      // userId:JSON.parse(localStorage.getItem("User")).id});
      Axios.delete(`https://localhost:7079/api/PostLike/LikeRemove/${props.postId}/${JSON.parse(localStorage.getItem("User")).id}`);
      // console.log(props.postId);
      setLike(like - 1);
      console.log(likers);
      const newLikers = likers.filter(m=>m!==JSON.parse(localStorage.getItem("User")).id);
      setLikers(newLikers);
      console.log(newLikers)
      console.log(likers);
     
      
      setIsLike(false);
      
    };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function submitPost(e){
    e.preventDefault();
   Axios.put(url,{
       id:props.postId,
       postTitle:postc.postTitle,
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
    const newdata = {...postc}
    newdata[e.target.id]=e.target.value
    setPostc(newdata)
    console.log(newdata)

}

  return (
    <div className="card gedf-card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mr-2">
              <img
                className="rounded-circle"
                width="45"
                src="https://picsum.photos/50/50"
                alt=""
              />
            </div>
            <div className="ml-2">
              <div className="h5 m-0">{props.name}</div>
              <div className="h7 text-muted">{props.lastName}</div>
            </div>
          </div>
          <div>
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle"
                type="button"
                id="gedf-drop1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-h"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="gedf-drop1"
              >
                <div className="h6 dropdown-header">Configuration</div>
                <a className="dropdown-item" href="#">
                  Save
                </a>
                <a className="dropdown-item" href="#">
                  Hide
                </a>
                <a className="dropdown-item" href="#">
                  Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="text-muted h7 mb-2">
          {" "}
          <i className="fa fa-clock-o"></i>
          {props.createdOn}
        </div>
        {/* <a className="card-link" href="#">
            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
          </a> */}
        <p className="card-text text-left ">{props.postTitle}</p>
      </div>
      <div className="card-footer">
        {/* {props.postLike} */}
        {/* <a href="#" className="card-link">
          <i className="fa fa-thumbs-up "aria-hidden="true"></i> Like
        </a> */}
         <>
      {isLike===false && likers.includes(JSON.parse(localStorage.getItem("User")).id)===false ? (<form onSubmit={(e)=>submitLike(e)}><div className="text-left"> <button 
        className={"like-button"}
        // onClick={onLikeButtonClick(props.postId)}
      >
        {"Like"} | {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
            background-color:gray
            
        }
        .liked {
            font-weight: bold;
            color: #1565c0;
            background-color:gray
            
          }
      `}</style></div></form>):(<div className="text-left"> <button
        className={"like-button liked"}
        onClick={offLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
            background-color:gray
            
            
        }
        .liked {
            font-weight: bold;
            color: #1565c0;
            background-color:gray
            
            
          }
      `}</style></div>)  }
     
    </>
        
        <a href="#" className="card-link">
          <i className="fa fa-comment"></i> Comment
        </a>
        <a href="#" className="card-link">
          <i className="fa fa-mail-forward"></i> Share
        </a>
        {/* <a href="#" className="card-link"><i className="fa fa-trash"></i> Delete</a> */}
        {props.postType === "U" &&
        props.publisherId === JSON.parse(localStorage.getItem("User")).id ? (
          <div className="text-left">
            <button
              onClick={() => props.deletePostProp(props.postId)}
              type="button"
              className="card-link float-right bg-black"
            >
              <i className="fa fa-trash text-danger "></i>
            </button>
            {/* <button onClick={UpdatePostModal} type="button" className='card-link float-left bg-black'><i className="fas fa-edit text-warning "></i>
            </button> */}
            <Button variant="primary" onClick={handleShow}>
              Düzenle
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e)=>submitPost(e)}>
                  {/* <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group> */}
                  <Form.Group
                    className="mb-3"
                    controlId="postTitle"
                  >
                    <Form.Label>Güncelle</Form.Label>
                    <Form.Control onChange={(e)=> handleWrite(e)} as="textarea" rows={3} autoFocus defaultValue={props.postTitle}></Form.Control>
                    <Button type="submit" variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
                    {/* <Form.Control as="textarea" rows={3} autoFocus /> */}
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Post;
