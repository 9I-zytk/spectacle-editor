import React, { Component, PropTypes } from "react";
import { RESIZECORNER } from "../../assets/icons";

import styles from "./resize-node.css";

export default class ResizeNode extends Component {
  static propTypes = {
    alignLeft: PropTypes.bool,
    alignRight: PropTypes.bool,
    cornerTopLeft: PropTypes.bool,
    cornerTopRight: PropTypes.bool,
    cornerBottomLeft: PropTypes.bool,
    cornerBottomRight: PropTypes.bool,
    handleMouseDownResize: PropTypes.func,
    handleTouchResize: PropTypes.func
  }

  renderCornerIcon(props) {
    if (
      !props.cornerTopLeft && !props.cornerTopRight &&
      !props.cornerBottomLeft && !props.cornerBottomRight
    ) {
      return;
    }

    const iconClass = [
      props.cornerTopLeft && styles.iconTopLeft,
      props.cornerTopRight && styles.iconTopRight,
      props.cornerBottomLeft && styles.iconBottomLeft,
      props.cornerBottomRight && styles.iconBottomRight
    ].join(" ");

    return (
      <span
        className={iconClass}
        dangerouslySetInnerHTML={{ __html: RESIZECORNER }}
      >
      </span>
    );
  }

  render() {
    const resolvedClassNames = [
      styles.handle,
      this.props.alignLeft && styles.handleLeft,
      this.props.alignRight && styles.handleRight,
      this.props.cornerTopLeft && styles.cornerTopLeft,
      this.props.cornerTopRight && styles.cornerTopRight,
      this.props.cornerBottomLeft && styles.cornerBottomLeft,
      this.props.cornerBottomRight && styles.cornerBottomRight
    ].join(" ");

    return (
      <div
        className={resolvedClassNames}
        onMouseDown={this.props.handleMouseDownResize}
        onTouchStart={this.props.handleTouchResize}
      >
        {this.renderCornerIcon(this.props)}
      </div>
    );
  }
}
