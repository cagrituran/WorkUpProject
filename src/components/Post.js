import Axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
// import LikeButton from "./LikeButton";
const Post = (props) => {
  const navigate = useNavigate();
  const url = "https://localhost:7079/api/Post/UpdateUserPost";
  const commenturl = "https://localhost:7079/api/PostComment/DoComment";
  const [commentp, setCommentp] = useState({
    comment: "",
    postId: props.postId,
    modifierUserId: JSON.parse(localStorage.getItem("User")).id
  })
  function submitComment(e) {
    e.preventDefault();
    Axios.post(commenturl, {
      comment: commentp.comment,
      postId: props.postId,
      modifierUserId: JSON.parse(localStorage.getItem("User")).id

    }).then(res => {
      //    console.log(res.data) 

      fetch(`https://localhost:7079/api/PostComment/GetPostComments/${props.postId}`)
        .then((response) => response.json())
        .then((commentData) => setcommentData(commentData));
      //  console.log(res)
      //  setcommentData(res)
      // window.location.reload();

      //    navigate('/home'); 

    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })
  }

  const [postc, setPostc] = useState({
    id: 0,
    postTitle: "",
    publisherId: 0,
  });
  const url2 = "https://localhost:7079/api/PostLike/LikeSave";
  const [likeb, setLikeb] = useState({
    postId: props.postId,
    modifierUserId: JSON.parse(localStorage.getItem("User")).id,
  });
  function submitLike(e) {
    setLike(like + 1);
    setIsLike(true);
    e.preventDefault();

    Axios.post(url2, {
      postId: likeb.postId,
      modifierUserId: likeb.modifierUserId,
    }).then((res) => {
      //    console.log(res.data)

      console.log(res);
      //  console.log(props.likers.includes(JSON.parse(localStorage.getItem("User")).id));
      //  window.location.reload();

      //    navigate('/home');
    });
  }

  const [likers, setLikers] = useState(props.likers);
  const [show, setShow] = useState(false);
  const [showComment, setCommentShow] = useState(false);
  const [commentData, setcommentData] = useState([]);

  const [like, setLike] = useState(props.postLike),
    [isLike, setIsLike] = useState(false),
    // onLikeButtonClick = (id) => {
    //   setLikeb({postId:id,modifierUserId:JSON.parse(localStorage.getItem("User")).id})
    //   setLike(like + 1);

    //   setIsLike(!isLike);

    // },
    offLikeButtonClick = async () => {
      // Axios.delete(`https://localhost:7079/api/PostLike/LikeRemove`,{postId: props.postId,
      // userId:JSON.parse(localStorage.getItem("User")).id});
      Axios.delete(
        `https://localhost:7079/api/PostLike/LikeRemove/${props.postId}/${JSON.parse(localStorage.getItem("User")).id
        }`
      );
      // console.log(props.postId);
      setLike(like - 1);
      console.log(likers);
      const newLikers = likers.filter(
        (m) => m !== JSON.parse(localStorage.getItem("User")).id
      );
      setLikers(newLikers);
      console.log(newLikers);
      console.log(likers);

      setIsLike(false);
    };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCommentClose = () => setCommentShow(false);
  const handleCommentShow = () => {
    setCommentShow(true);
    fetch(`https://localhost:7079/api/PostComment/GetPostComments/${props.postId}`)
      .then((response) => response.json())
      .then((commentData) => setcommentData(commentData));
    console.log(commentData)

  }
  function submitPost(e) {
    e.preventDefault();
    Axios.put(url, {
      id: props.postId,
      postTitle: postc.postTitle,
      publisherId: JSON.parse(localStorage.getItem("User")).id,
    })
      .then((res) => {
        //    console.log(res.data)

        console.log(res);
        window.location.reload();

        //    navigate('/home');
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  function handleWrite(e) {
    const newdata = { ...postc };
    newdata[e.target.id] = e.target.value;
    setPostc(newdata);
    console.log(newdata);
  }
  function handleCommentWrite(e) {
    const yenidata = { ...commentp }
    yenidata[e.target.id] = e.target.value
    setCommentp(yenidata)
    console.log(yenidata)

  }
  const deleteComment = async(id)=>{
    // console.log(id);
    Axios.delete(`https://localhost:7079/api/PostComment/RemoveComment/${id}`);
    // window.location.reload(); // tekrar request atmak yerine sadece state güncellemesi kafi :)
    console.log(commentData);
    const newComments = commentData.filter(m=>m.id!==id);
    console.log(newComments);
    
    setcommentData(newComments);
    
    
  }
  const navProfile = (e) => {
    // e.preventDefault();
    localStorage.setItem('UserProfile',JSON.stringify(props.publisherId));
    navigate(`/profile/${props.publisherId}`)

    
    
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
                src={props.userImage}
                alt=""
              />
            </div>
            <div className="ml-2">
              <div className="h5 m-0">{props.name}</div>
              <div className="h7 text-muted">{props.lastName}</div>
            </div>
          </div>
          <div>
            {props.publisherId!==JSON.parse(localStorage.getItem("User")).id&&<Button onClick={(e)=>navProfile(e)}>Profile Git</Button>}
            
            {/* <div className="dropdown">
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
            </div> */}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="text-muted h7 mb-2">
          {" "}
          <i className="fa fa-clock-o"></i>
          {props.createdOn.slice(8,10)}/{props.createdOn.slice(5,7)}/{props.createdOn.slice(0,4)} {props.createdOn.slice(11,16)}
        </div>
        {/* <a className="card-link" href="#">
            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
          </a> */}
        <p className="card-text text-left ">{props.postTitle}</p>
      </div>
      <div className="card-footer text-right">
        {/* {props.postLike} */}
        {/* <a href="#" className="card-link">
          <i className="fa fa-thumbs-up "aria-hidden="true"></i> Like
        </a> */}
        <>
          {isLike === false &&
            likers.includes(JSON.parse(localStorage.getItem("User")).id) ===
            false ? (
            <form onSubmit={(e) => submitLike(e)}>
              <div className="text-left">
                {" "}
                <button
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
      `}</style>
              </div>
            </form>
          ) : (
            <div className="text-left">
              {" "}
              <button
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
      `}</style>
            </div>
          )}
        </>
        <Button
          variant="primary"
          className="card-link float-right"
          onClick={handleCommentShow}
        >
          Yorumlar
        </Button>
        <Modal show={showComment} onHide={handleCommentClose}>
          <Modal.Header closeButton>
            <Modal.Title>Yorumlar</Modal.Title>
          </Modal.Header>
          <div>
            {commentData.map((item) => {
              return (
                <li key={item.id}>
                  <Modal.Body>

                    <div>
                      <div className="ml-4">
                        <img
                          className="rounded-circle"
                          width="25"
                          src={item.user.profileImage}
                          alt=""
                        />
                      </div>
                      {/* <div className="text-muted h7 mb-2 float-right">
                {" "}
                <i className="fa fa-clock-o">01.02.1998 21:15</i>
                {props.createdOn}
              </div> */}
                      {/* <a className="card-link" href="#">
               <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
               </a> */}
                      <p className="card-text float-left  " style={{ fontWeight: 'bold' }}>{item.user.name} {item.user.lastName}</p>
                      <p className="card-text text-center ">{item.comment}</p>
                      {item.user.id ===JSON.parse(localStorage.getItem("User")).id || props.publisherId===JSON.parse(localStorage.getItem("User")).id ? (<div>
                      <Button
                        onClick={() => deleteComment(item.id)}
                        type="button"
                        className="bg-black"
                      >
                        <i className="fa fa-trash text-danger "></i>
                      </Button>
                      <Button

                        type="button"
                        className="bg-black"
                      >
                        <i className="fa fa-edit text-warning "></i>
                      </Button>
                      </div> ):(<div></div>)}

                      <hr></hr>
                    </div>



                  </Modal.Body>
                </li>)
            })}
            <Form onSubmit={(e) => submitComment(e)}>
              <Form.Group>
                <label className="sr-only" htmlFor="comment">post</label>
                <textarea onChange={(e) => handleCommentWrite(e)} className="form-control" id="comment" rows="3" placeholder="Yorum Yaz..."></textarea>
              </Form.Group>
              <Button type="submit" variant="primary">
                Yorum Yap
              </Button>
            </Form>

          </div>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCommentClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>

        {/* <a href="#" className="card-link float-right">
          <i className="fa fa-comment"></i> Comment
        </a> */}
        {/* <a href="#" className="card-link">
          <i className="fa fa-mail-forward"></i> Share
        </a> */}
        {/* <a href="#" className="card-link"><i className="fa fa-trash"></i> Delete</a> */}
        {props.postType === "U" &&
          props.publisherId === JSON.parse(localStorage.getItem("User")).id ? (
          <div className="text-left">
            <Button
              onClick={() => props.deletePostProp(props.postId)}
              type="button"
              className="card-link float-right bg-black"
            >
              <i className="fa fa-trash text-danger "></i>
            </Button>
            {/* <button onClick={UpdatePostModal} type="button" className='card-link float-left bg-black'><i className="fas fa-edit text-warning "></i>
            </button> */}
            <Button variant="danger" onClick={handleShow}>
              Düzenle
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => submitPost(e)}>
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
                  <Form.Group className="mb-3" controlId="postTitle">
                    <Form.Label>Güncelle</Form.Label>
                    <Form.Control
                      onChange={(e) => handleWrite(e)}
                      as="textarea"
                      rows={3}
                      autoFocus
                      defaultValue={props.postTitle}
                    ></Form.Control>
                    <Button
                      type="submit"
                      variant="primary"
                      onClick={handleClose}
                    >
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
