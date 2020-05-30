import { UPDATE } from "./actions";
import marked from "marked";

const initialInput =
  "# This is my title" +
  "\n## This my subtitle" +
  "\n**bold text**" +
  "\n_italic text_" +
  "\n**_image_**" +
  "\n" +
  "\n![Mignon chaton](https://www.manga-news.com/public/images/dvd/chi-une-vie-de-chat-dvd-glenat.jpg)" +
  "\n" +
  "\n**Lists**" +
  "\n* Item 1" +
  "\n* Item 2" +
  "\n  * Item 2a" +
  "\n  * Item 2b" +
  "\n" +
  "\n**_link_** [FreeCodeCamp](http://https://www.freecodecamp.org)" +
  "\n" +
  "\n_**une ligne de code**_ " +
  "\n` <div> ma div </div> `" +
  "\n" +
  "\n_**Plusieurs lignes de code**_" +
  "\n```" +
  "\nfunction add(a,b) {" +
  "\n   return a+b;" +
  "\n}" +
  "\n```" +
  "\n";

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
