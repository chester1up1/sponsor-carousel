import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { UploadFile } from "../actions";
import "./style.scss";

export function AddImgBtn(props) {
  const { UploadFile, id } = props;
  const [file, setFile] = useState("");
  const [href, setHref] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const changeHref = (e) => {
    setHref(e.target.value);
    setError(false);
  };
  const handleFileSelect = (evt) => {
    var files = evt.target.files;
    for (var i = 0, f; (f = files[i]); i++) {
      if (!f.type.match("image.*")) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e) {
          var span = document.createElement("span");
          span.innerHTML = [
            '<img width="100%" height="70%"  class="thumb" src="',
            e.target.result,
            '" title="',
            theFile.name,
            '"/>',
          ].join("");
          document.getElementById("list").insertBefore(span, null);
        };
      })(f);
      reader.readAsDataURL(f);
    }
  };
  const handleChange = (e) => {
    toggle();
    handleFileSelect(e);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const PostPhoto = () => {
    if (href == "") {
      setError(true);
    } else {
      UploadFile(file, id, href);
      toggle();
      setHref("");
    }
  };
  return (
    <div className="add_btn">
      <Input type="file" name="file" id="file" onChange={handleChange} />
      <label for="file" className="file">
        <p>+</p>
      </label>
      <Modal isOpen={modal} toggle={toggle} className="photo">
        <ModalBody style={{ display: "flex", flexDirection: "column" }}>
          <output id="list"></output>
          <InputGroup className="add_href">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>link on click</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="www.some-link.com"
              value={href}
              onChange={changeHref}
              invalid={error}
            />
          </InputGroup>
          <ModalFooter
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              color=""
              style={{
                fontWeight: "bold",
                fontSize: 25,
                backgroundColor: "#d0d4cd",
                color: "#ffffff",
              }}
              onClick={toggle}
            >
              cancel
            </Button>
            <Button
              color=""
              style={{
                fontWeight: "bold",
                fontSize: 25,
                backgroundColor: "#9de374",
                color: "#ffffff",
              }}
              onClick={PostPhoto}
            >
              add photo
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  UploadFile,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImgBtn);
