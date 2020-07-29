const defaultState = {
  load: false,
  proportions: 11,
  slider_height: 11,
  slider_width: 11,
  slider_left: 11,
  slider_top: 11,
  timer: 5,
};

const settings = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_SETTINGS":
      return {
        ...state,
        load: true,
        proportions: action.data[0].proportions,
        slider_height: action.data[0].slider_height,
        slider_width: action.data[0].slider_width,
        slider_left: action.data[0].slider_left,
        slider_top: action.data[0].slider_top,
        timer: action.data[0].timer,
      };
    // case "DELETE_PROJECT":
    //   return {
    //     ...state,
    //     load: true,
    //     items: state.items.filter((item) => item.key !== action.data),
    //   };

    // case "ADD_TASK":
    //   return {
    //     ...state,
    //     load: true,
    //     items: state.items.map((item) =>
    //       item.key == action.data.id
    //         ? { ...item, tasks: [...item.tasks, action.data] }
    //         : item
    //     ),
    //   };
    // case "TAKE_TASK":
    //   return {
    //     ...state,
    //     load: true,
    //     items: state.items.map((item) =>
    //       item.key == action.data.id
    //         ? { ...item, tasks: action.data.result }
    //         : item
    //     ),
    //   };
    // case "DELETE_TASK":
    //   return {
    //     ...state,
    //     load: true,
    //     items: state.items.map((item) =>
    //       item.key == action.data.id
    //         ? { ...item, tasks: action.data.result }
    //         : item
    //     ),
    //   };
    // case "FAILED_TASK":
    //   return {
    //     ...state,
    //     load: true,
    //     items: state.items.map((item) =>
    //       item.key == action.data.id
    //         ? { ...item, tasks: action.data.result }
    //         : item
    //     ),
    //   };
    // case "COMPLITED_TASK":
    //   return {
    //     ...state,
    //     load: true,
    //     items: state.items.map((item) =>
    //       item.key == action.data.id
    //         ? { ...item, tasks: action.data.result }
    //         : item
    //     ),
    //   };
    // case "CONNECT":
    //   return {
    //     ...state,
    //     path: true,
    //   };
    default:
      return state;
  }
};

export default settings;
