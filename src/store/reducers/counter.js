import {Map, List, toJS} from "immutable";

export default function(state = Map(), action){
  switch (action.type) {

    case "INCREMENT": {
      return state.update('val', x => x + 1);
    }

    default: {
      return state;
    }

  }
}
