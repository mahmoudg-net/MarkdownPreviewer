import { UPDATE } from "./actions";
import marked from "marked";

const initialInput =
  "# This is my title\n" +
  "## This my subtitle\n" +
  "**bold text**\n" +
  "_italic text_\n\n" +
  "**Lists**\n" +
  "* Item 1\n" +
  "* Item 2\n" +
  "  * Item 2a\n" +
  "  * Item 2b\n" +
  "1. Item 1\n" +
  "1. Item 2\n" +
  "1. Item 3\n" +
  "   1. Item 3a\n" +
  "   1. Item 3b\n";

export const initialState = {
  input: initialInput,
  output: marked(initialInput),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        input: action.input,
        output: marked(action.input).replace("\n", "<br />"),
      };
    default:
      return state;
  }
};
