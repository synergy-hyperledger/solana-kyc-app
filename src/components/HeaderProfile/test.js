import React from "react";
import Button from "reactstrap/lib/Button";

export default function HeaderProfile() {

  const toggle = (id) => {
    this.setState(prevState => ({
      [id]: !prevState[id],
    }));
  }
  
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
                  <span class="badge badge-success badge-pill">
                    KYC Verified
                  </span>
                </div>
                <div className="col-auto">
                  <span class="badge badge-dark badge-pill">Edit</span>
                </div>
              </div>
            </div>
            <div className="col-auto ml-auto">
              <Button color="primary" type="submit" className="btn-sm mr-2">
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
                    onClick={() => this.toggle('demo')}
                  >
                    Provide Consent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
