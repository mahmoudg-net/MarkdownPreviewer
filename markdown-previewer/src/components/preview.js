import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Presentation(props) {
  const { output } = { ...props };
  return <div id="preview" dangerouslySetInnerHTML={{ __html: output }} />;
}
Presentation.propTypes = {
  output: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    output: state.output,
  };
};

export const Preview = connect(mapStateToProps, null)(Presentation);
