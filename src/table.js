import React from "react";
import CSSModules from "react-css-modules";
import styles from "./table.scss";

class Table extends React.Component {
  render () {
    return (
      <div styleName="element">
        <div styleName="haha">
          <div styleName="element">A0</div>
          <div styleName="haha">B0</div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Table, styles);
