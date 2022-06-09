const Post = (props) => {
 return (
<div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img className="rounded-circle" width="45" src={props.image} alt=""/>
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{props.name}</div>
                <div className="h7 text-muted">{props.lastName}</div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="#">Save</a>
                  <a className="dropdown-item" href="#">Hide</a>
                  <a className="dropdown-item" href="#">Report</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>{props.createdOn}</div>
          {/* <a className="card-link" href="#">
            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
          </a> */}
          <p className="card-text text-left">
              {props.postTitle}
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
          <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
          <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
        </div>
      </div> )
}

export default Post;
