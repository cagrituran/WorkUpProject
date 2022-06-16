
export default function ProfileCard(props) {
    return (
        <div className="card gedf-card" style={{ borderRadius: "20px" }}>
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">

                        <div className="ml-2">
                            <div className="h5 m-0">{props.name}</div>
                            <div className="h7 text-muted">{props.departman}</div>
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

                                <button className="dropdown-item">
                                    Sil
                                </button>
                                <button className="dropdown-item">
                                    Güncelle
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="text-muted h7 mb-2 text-left">
                    {" "}
                    <i className="fa fa-clock-o"></i>
                    11.2002/11.2006
                </div>

                <p className="card-text text-left ">{props.explanation}</p>
            </div>
        </div>
    )
}
