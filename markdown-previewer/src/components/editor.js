import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { update } from "../redux/actions";

function Presentation(props) {
  const { input, updatePreview } = { ...props };
  return (
    <React.Fragment>
      <h2 id="editorHead">Editor</h2>
      <textarea id="editor" value={input} onChange={updatePreview}></textarea>
    </React.Fragment>
  );
}

Presentation.propTypes = {
  input: PropTypes.string,
  updatePreview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    input: state.input,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePreview: (event) => dispatch(update(event.target.value)),
  };
};

export const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentation);
