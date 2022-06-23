import React from "react";

export default function BasePageMain() {
  return (
    <div className="baseMain">
      <div className="maincontainer">
        <div className="card gedf-card">
          <form>
            <div className="card-header">
              <ul
                className="nav nav-tabs card-header-tabs"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="posts-tab"
                    data-toggle="tab"
                    href="#posts"
                    role="tab"
                    aria-controls="posts"
                    aria-selected="true"
                  >
                    Make a publication
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="images-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="images"
                    aria-selected="false"
                    href="#images"
                  >
                    Images
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="posts"
                  role="tabpanel"
                  aria-labelledby="posts-tab"
                >
                  <div className="form-group">
                    <label className="sr-only" htmlFor="postTitle">
                      post
                    </label>
                    <textarea
                      className="form-control"
                      id="postTitle"
                      rows="3"
                      placeholder="What are you thinking?"
                    ></textarea>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="images"
                  role="tabpanel"
                  aria-labelledby="images-tab"
                >
                  <div className="form-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Upload image
                      </label>
                    </div>
                  </div>
                  <div className="py-4"></div>
                </div>
              </div>
              <div className="btn-toolbar justify-content-between">
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary">
                    share
                  </button>
                </div>
                <div className="btn-group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-globe"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="btnGroupDrop1"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-globe"></i> Public
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-users"></i> Friends
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-user"></i> Just me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="card gedf-card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mr-2">
                  <img className="rounded-circle" width="45" src="/" alt="" />
                </div>
                <div className="ml-2">
                  <div className="h5 m-0">fsfed</div>
                  <div className="h7 text-muted">fedewe</div>
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
              edewdw
              <i className="fa fa-clock-o"></i>
              fdfdede
            </div>

            <p className="card-text text-left ">efee</p>
          </div>
        </div> */}
          <section className="hero">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="cardbox shadow-lg bg-white">
                    <div className="cardbox-heading">
                      <div className="dropdown float-right" >
                        <button className="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                          <em className="fa fa-ellipsis-h"></em>
                        </button>
                        <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" >
                          <a className="dropdown-item" href="#">Hide post</a>
                          <a className="dropdown-item" href="#">Stop following</a>
                          <a className="dropdown-item" href="#">Report</a>
                        </div>
                      </div>
                      <div className="media m-0">
                        <div className="d-flex mr-3">
                          <a href=""><img className="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User"/></a>
                        </div>
                        <div className="media-body">
                          <p className="m-0">Benjamin Robinson</p>
                          <small><span><i className="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
                          <small><span><i className="icon ion-md-time"></i> 10 hours ago</span></small>
                        </div>
                      </div>
                    </div>
                    <div className="cardbox-item">
                      <img className="img-fluid" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/1.jpg" alt="Image"/>
                    </div>
                    <div className="cardbox-base">
                      <ul className="float-right">
                        <li><a><i className="fa fa-comments"></i></a></li>
                        <li><a><em className="mr-5">12</em></a></li>
                        <li><a><i className="fa fa-share-alt"></i></a></li>
                        <li><a><em className="mr-3">03</em></a></li>
                      </ul>
                      <ul>
                        <li><a><i className="fa fa-thumbs-up"></i></a></li>
                        <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" className="img-fluid rounded-circle" alt="User"/></a></li>
                        <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" className="img-fluid rounded-circle" alt="User"/></a></li>
                        <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" className="img-fluid rounded-circle" alt="User"/></a></li>
                        <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" className="img-fluid rounded-circle" alt="User"/></a></li>
                        <li><a><span>242 Likes</span></a></li>
                      </ul>			   
                    </div>
                    <div className="cardbox-comments">
                      <span className="comment-avatar float-left">
                        <a href=""><img className="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."/></a>                            
                      </span>
                      <div className="search">
                        <input placeholder="Write a comment" type="text"/>
                        <button><i className="fa fa-camera"></i></button>
                      </div>
                    </div>		  	
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
}
