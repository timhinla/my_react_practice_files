import React from "react";
import { Thumbnails } from "./thumbnails";
import { ViewPanel } from "./viewPanel";
import { getImages } from "./mockDate";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { currentThumbnail: null, data: null };

  componentDidMount() {
    console.log("completed update");
    getImages().then(data => {
      this.setState({ data: data });
    });
  }
  selected = selectedItem => {
    console.log(selectedItem);
    this.setState({ currentThumbnail: selectedItem });
  };

  render() {
    if (!this.state.data) return <div>Loading...</div>;

    return (
      <div>
        <Thumbnails thumbsInfo={this.state.data} onSelected={this.selected} />
        {this.state.currentThumbnail && (
          <ViewPanel bigSaturn={this.state.currentThumbnail} />
        )}
      </div>
    );
  }
}
