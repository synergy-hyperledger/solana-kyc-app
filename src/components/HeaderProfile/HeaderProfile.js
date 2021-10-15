import React from "react";
import { ModalBody, ModalFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Alert, Button } from "reactstrap";
import Col from "reactstrap/lib/Col";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import Widget from "../../components/Widget";
import microsoft from "../../images/microsoft.png";

class HeaderProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "admin@kyc.com",
      password: "ABC12345",
    };
  }
  
  toggle(id) {
    this.setState((prevState) => ({
      [id]: !prevState[id],
    }));
  }

  render() {
    const { demo, scrollingLong, large, small, launch } = this.state;
    return (
      <div className="col-12 px-0">
        <div className="form-row mb-3 align-items-center">
          <div className="col-auto">
            <img
              src={
                "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              }
              width="80"
              height="80"
              className="company__logo"
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col-auto">
                <h5 className="comp__title">ABC Corporation</h5>
                <span>Singapore</span>
              </div>
              <div className="col-auto">
                <div className="form-row">
                  <div className="col-auto">
                    {
                      this.props.showSaveBtn === true && <span class="badge badge-success badge-pill">
                      KYC Verified
                      </span>
                    }
                    {
                      this.props.showSaveBtn === false && <span class="badge badge-danger badge-pill">
                      KYC Unverified
                      </span>
                    }
                  </div>
                    {
                      this.props.showSaveBtn === true && <div className="col-auto" onClick={() => this.props.handleEditFeature(1)}>
                    <span class="badge badge-dark badge-pill">Edit</span>
                  </div>
                    }
                </div>
              </div>
              <div className={`${this.props.showSaveBtn === true ? 'd-none':'' } col-auto ml-auto`}>
                <Button color="primary" type="submit" className="btn-sm mr-2" onClick={() => this.props.handleEditFeature(2)}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="border-bottom pb-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <h4 className="sec__hdr">Basic Details</h4>
              </div>
              <div className="col-auto">
                <div className="form-row">
                  <div className="col-auto">
                    <Button
                      color="primary"
                      type="submit"
                      href="#/app/my-profile"
                      className="btn-sm mr-xs"
                    >
                      Manage Access
                    </Button>
                  </div>
                  <div className="col-auto">
                    <Button
                      color="primary"
                      type="submit"
                      className="btn-sm mr-xs"
                      onClick={() => this.toggle("demo")}
                    >
                      Provide Consent
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={demo} toggle={() => this.toggle("demo")}>
          <ModalHeader toggle={() => this.toggle("demo")}>
            Provide Consent
          </ModalHeader>
          <ModalBody className="bg-white">
            <div className="col-12">
              <FormGroup row>
                <Label for="normal-field" md={12} className="">
                  Select Entity
                </Label>
                <Col md={12}>
                  <Input
                    type="text"
                    id="normal-field"
                    placeholder="May have placeholder"
                    className="input__modal"
                    value="ABC Corporation Limited"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="normal-field" md={12} className="">
                Public Unique Key
                </Label>
                <Col md={12}>
                  <Input
                    type="text"
                    id="normal-field"
                    placeholder="May have placeholder"
                    className="input__modal"
                    value="HOSFOEWROFSDOF24R2323–230423JWFWDLFNWEFW-SOSOFSDFNSK"
                  />
                </Col>
              </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="col-12">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="form-row align-items-center justify-content-between">
                    <div className="col-auto">
                      <Button color="primary">GENERATE KEY</Button>
                    </div>
                    <div className="col-auto">
                      <Button color="success">SHARE IT</Button>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <Button color="danger" onClick={() => this.toggle("demo")}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default HeaderProfile;
