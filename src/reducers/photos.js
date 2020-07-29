const defaultState = {
  load: false,
  items: [],
};

const photos = (state = defaultState, action) => {
  switch (action.type) {
    case "NEW_PHOTO":
      console.log(action.data);
      return {
        ...state,
        load: true,
        items: [...state.items, action.data],
      };
    case "GET_PHOTOS":
      return {
        ...state,
        load: true,
        items: action.data,
      };
    case "LOAD_PHOTOS":
      return {
        ...state,
        load: true,
      };
    case "DEL_PHOTO":
      return {
        ...state,
        load: true,
        items: state.items.filter((item) => item.name !== action.data),
      };
    default:
      return state;
  }
};

export default photos;
