import { database } from "../../firebase/index";
import * as firebase from "firebase";
export const GetSettings = (id) => {
  return async (dispatch) => {
    const productsRef = database.collection("settings");
    const settings = [];
    return productsRef
      .get()
      .then((snapshot) => {
        snapshot.forEach((x) => {
          if (x.data().id == id) {
            settings.push(x.data());
          }
        });
        dispatch({ type: "GET_SETTINGS", data: settings });
        return settings;
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
};
