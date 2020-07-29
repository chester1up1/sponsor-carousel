import { database, storage } from "../../firebase/index";
import * as firebase from "firebase";

export const postSettings = (id, data) => {
  return async (dispatch) => {
    try {
      let setDoc = database.collection("settings").doc(`${id}`).set(data);
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const UploadFile = (file, id, href) => {
  console.log("file, id", file, id);
  return async (dispatch) => {
    var metadata = {
      customMetadata: {
        href: href,
      },
    };
    let storageRef = storage.ref();
    let imgRef = storageRef.child(`${id}/${file.name}`);
    const uploadTask = storage
      .ref(`${id}/${file.name}`)
      .put(file, metadata)
      .then(() => {
        imgRef.getDownloadURL().then((url) => {
          let result = { url: url, name: file.name };
          dispatch({ type: "NEW_PHOTO", data: result });
        });
      });
  };
};

export const GetPhotos = (id) => {
  return async (dispatch) => {
    var storageRef = storage.ref();
    storageRef
      .child(`${id}/`)
      .listAll()
      .then((element) => {
        let result = [];
        element.items.forEach((item, index) => {
          item.getDownloadURL().then((url) => {
            item.getMetadata().then((metadata) => {
              result = [
                ...result,
                {
                  url: url,
                  name: item.name,
                  href: metadata.customMetadata.href,
                },
              ];
              if (element.items.length == result.length) {
                dispatch({ type: "GET_PHOTOS", data: result });
              }
            });
          });
        });
      });
  };
};
export const DeletePhoto = (id, name) => {
  return async (dispatch) => {
    try {
      var storageRef = storage.ref();
      var desertRef = storageRef.child(`${id}/${name}`);
      desertRef
        .delete()
        .then(function () {
          dispatch({ type: "DEL_PHOTO", data: name });
        })
        .catch(function (error) {});
    } catch (error) {}
  };
};
