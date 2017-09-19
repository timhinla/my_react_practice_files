import React from "react";
import "./viewPanel.css";

export class ViewPanel extends React.Component {
  componentWillReceiveProps(nextProps){
    console.log('next props', nextProps)
  }
  render() {
    const { url, name, description } = this.props.bigSaturn;
    return (
      <div>
        <img src={url} className="view-Panel-Image" />
        <div>{name}</div>
        <div>{description}</div>
      </div>
    );
  }
}
