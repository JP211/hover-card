import React from "react";
import CardHoverMenus from "./CardHoverMenu/CardHoverMenus";
import CardLoneMoreButton from "./CardHoverMenu/CardLoneMoreButton";
//----====---------------------------------------------------
class Card extends React.Component {
  render() {
    return (
      /*<div className="col-sm-6 col-md-4 col-lg-3 mt-4" id={"card"+this.props.id}>*/
      <div className="col-sm-6 col-md-6 col-lg-4 mt-4">
        <div className="card">
          <img
            alt="random pic"
            className="card-img-top"
            src="https://picsum.photos/200/150/?random"
            style={{ minWidth: 200, minHeight: 150 }}
          />
          <CardLoneMoreButton />
          <CardHoverMenus flashFn={this.props.flashFn} />
          <div className="card-block">
            <h4 className="card-title">Title Text</h4>
            <div className="meta">
              <a href="#">Friends</a>
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
          <div className="card-footer">
            <span className="float-right">Joined in 2013</span>
            <span>
              <i className="" />
              75 Friends
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
