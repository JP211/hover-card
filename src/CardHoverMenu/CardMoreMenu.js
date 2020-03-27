import React from "react";
import CardMoreMenuBtn from "./CardMoreMenuBtn";
//----============-----------------------------------
class CardMoreMenu extends React.Component {
  render = () => {
    const p = this.props;
    return p.hidden ? (
      <CardMoreMenuBtn
        clicked={p.toggle}
        isRight={true}
        icon="ellipsis-v"
        txt="MORE"
      />
    ) : (
      <div
        style={{ background: "white", maxWidth: 300 }}
        className="m-0 float-right"
      >
        <CardMoreMenuBtn
          clicked={p.funcs.pinAny}
          icon="thumbtack"
          txt="Pin card to any board"
        />
        <CardMoreMenuBtn
          clicked={p.funcs.pinHere}
          icon="thumbs-up"
          txt="Pin card to this board"
        />
        <CardMoreMenuBtn
          clicked={p.funcs.notInterested}
          icon="thumbs-down"
          txt="Not interested in this card"
        />
        <CardMoreMenuBtn
          clicked={p.funcs.shareCard}
          icon="share"
          txt="Share this card"
        />
        <CardMoreMenuBtn
          clicked={p.funcs.viewBoard}
          icon="eye"
          txt="View board"
        />
      </div>
    );
  };
}
export default CardMoreMenu;
