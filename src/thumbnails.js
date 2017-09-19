import React from "react";
import "./thumbnails.css";

export class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
    //        this.thumbClicked = this.thumbClicked.bind(this);
  }
  thumbClicked = thumbnail => {
    console.log("this from event", this);
    console.log("gotClicked");
    this.props.onSelected(thumbnail);
  };
  getBackgroundColor = cat => {
    switch (cat) {
      case "tilt":
        return "yellow";
      case "futuristic":
        return "blue";
      case "multiple":
        return "maroon";
    }
  };
  getAny = cat => {
    switch (cat) {
      case "tilt":
        return <div>This was a tilt</div>;
      case "futuristic":
        return <div>This was a futuristic</div>;
      case "multiple":
        return <div>This was a multiple</div>;
    }
  };
  render() {
    return (
      <div className="thumbnailContainer">
        {this.props.thumbsInfo.map((thumbnail, i) => {
          return (
            <div key={i} onClick={() => this.thumbClicked(thumbnail)}>
              <div
                style={{
                  backgroundImage: `url(${thumbnail.url}`,
                  backgroundColor: this.getBackgroundColor(thumbnail.category)
                }}
                className="thumbPic"
              />
              <div>{thumbnail.name}</div>
              {this.getAny(thumbnail.category)}
            </div>
          );
        })}
      </div>
    );
  }
}
