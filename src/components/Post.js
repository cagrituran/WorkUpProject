import Axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
const Post = (props) => {
  const url = "https://localhost:7079/api/Post/UpdateUserPost"
    const[postc ,setPostc] = useState({
        id:0,
        postTitle:"",
        publisherId:0
    })

  const [show, setShow] = useState(false);

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
        <a href="#" className="card-link">
          <i className="fa fa-gittip"></i> Like
        </a>
        <a href="#" className="card-link">
          <i className="fa fa-comment"></i> Comment
        </a>
        <a href="#" className="card-link">
          <i className="fa fa-mail-forward"></i> Share
        </a>
        {/* <a href="#" className="card-link"><i className="fa fa-trash"></i> Delete</a> */}
        {props.postType === "U" &&
        props.publisherId === JSON.parse(localStorage.getItem("User")).id ? (
          <div>
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
                <Modal.Title>Yorum</Modal.Title>
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
                    <Form.Label>Yorumu Değiştir</Form.Label>
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
