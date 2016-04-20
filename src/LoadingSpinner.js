import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/loadingSpinner.scss";

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div styleName="spinners">
      	<div styleName="spinner-1"></div>
      	<div styleName="spinner-2"></div>
      	<div styleName="spinner-3"></div>
      	<div styleName="spinner-4"></div>
      </div>
    );
  }
}

export default CSSModules(LoadingSpinner, styles);
