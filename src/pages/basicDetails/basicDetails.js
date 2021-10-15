import React from "react";
import { ButtonGroup } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import UncontrolledButtonDropdown from "reactstrap/lib/UncontrolledButtonDropdown";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import Loader from "../../components/Loader/Loader";
import Widget from "../../components/Widget/Widget";
import axios from "axios";

class BasicDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      readOnly: (localStorage.getItem('basicDetails') && localStorage.getItem('basicDetails') !== 'undefined') ? true : false,
      showLoader: false,
      basicDetails: (localStorage.getItem('basicDetails') && localStorage.getItem('basicDetails') !== 'undefined') ? JSON.parse(localStorage.getItem('basicDetails')) : {
        legalName : '',
        leiRegistrationStatus: '',
        primaryCountryOfOperations: '',
        swiftCode:'',
        incorporationCountry : '',
        incorporationDate : '',
        entityType :'',
        registrationNumber :'',
        lei:'',
        primaryIsicCode:'',
        registeredAddress : {
         addressLine1 :'',
         pincode : '',
         addressLine2 : '',
         state: '',
       city : '',
         country:''
        
        },
        operational :{
        addressLine1 :'',
         pincode : '',
         addressLine2 : '',
         state: '',
       city: '',
         country:''
        
        
        }
        
        }
    };
  }
  handleChange = (e) => {
    // localStorage.setItem ( e.target.name , e.target.value )
    var field = e.target.name;
    var value = e.target.value;
    
    if (field.startsWith('registered')){
      let fieldvalue = field.split('.').pop();
      this.state.basicDetails.registeredAddress[fieldvalue] = value;
    }
    else if (field.startsWith('operational')){
      let fielvalue = field.split('.').pop();
      this.state.basicDetails.operational[fielvalue] = value;
    }
    else{
      this.state.basicDetails[field] = value;
    }

    
    this.setState({basicDetails: this.state.basicDetails});
  }

  enableEditOrSaveOption = (caseVal) => {
    if (caseVal === 1) {
      // console.log('edit ption is enabled');
      this.setState((prevState) => { return { readOnly: false } });
    } else if (caseVal === 2) {
      this.setState((prevState) => { return { readOnly: true } });
      this.setState((prevState) => { return { showLoader: true } });
      const saveDetails = { basicDetails:  this.state.basicDetails , account_id : localStorage.getItem('account_id') };
    axios.post('http://localhost:4000/createCustomer', saveDetails)
    .then(response => console.log(response));

      setTimeout(() => {
        this.setState((prevState) => { return { showLoader: false } });
      }, 3000);
    }
    // this.setState({ readOnly: !this.state.readOnly });
    // setTimeout(() => {
      console.log('edit ption is enabled 111', this.state.readOnly);
    // }, 1000);
  }

  render() {
    return (
      <div>
        <div className="loader">
          { this.state.showLoader &&
            <Loader className="showLoader" size={50}/>
          }
        </div>
        <div className="col-12">
          <HeaderProfile showSaveBtn={this.state.readOnly} handleSaveFeature={this.enableEditOrSaveOption} handleEditFeature={this.enableEditOrSaveOption}/>
          <Widget settings refresh close>
          
            <FormGroup>
              <Form>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Legal Name
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        name = "legalName"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        readOnly={this.state.readOnly}
                        onChange= {this.handleChange}
                        defaultvalue={this.state.basicDetails.legalName}

                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        LEI Registration Status
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        readOnly={this.state.readOnly}
                        name = "leiRegistrationStatus"
                        onChange= {this.handleChange}
                        defaultValue={this.state.basicDetails.leiRegistrationStatus}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Primary Country of Operations
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.primaryCountryOfOperations}
                        readOnly={this.state.readOnly}
                        name = "primaryCountryOfOperations"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Swift Code
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.swiftCode}
                        readOnly={this.state.readOnly}
                        name = "swiftCode"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Registration Number
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.registrationNumber}
                        readOnly={this.state.readOnly}
                        name = "registrationNumber"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        LEI
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.lei}
                        readOnly={this.state.readOnly}
                        name = "lei"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Primary ISIC Code
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.primaryIsicCode}
                        readOnly={this.state.readOnly}
                        name = "primaryIsicCode"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Incorporation Country
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.incorporationCountry}
                        readOnly={this.state.readOnly}
                        name = "incorporationCountry"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Incorporation Date
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.incorporationDate}
                        readOnly={this.state.readOnly}
                        name = "incorporationDate"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Entity Type
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.entityType}
                        readOnly={this.state.readOnly}
                        name = "entityType"
                        onChange= {this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </FormGroup>
          </Widget>
          <Widget settings refresh close>
            <div className="mb-4 border-bottom pb-3">
              <h4 className="sec__hdr">Address</h4>
            </div>
            <FormGroup>
              <Form>
                <Row>
                  <Col md={6}>
                    <h5 className="article__hdr">Registered</h5>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 1
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            name = "registered.addressLine1"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.registeredAddress.addressLine1}
                            readOnly={this.state.readOnly}
                            onChange = {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            City
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.registeredAddress.city}
                            readOnly={this.state.readOnly}
                            name = "registeredAddress.city"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Country
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.registeredAddress.country}
                            readOnly={this.state.readOnly}
                            name = "registeredAddress.country"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                      <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 2
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.registeredAddress.addressLine2}
                            readOnly={this.state.readOnly}
                            name = "registeredAddress.addressLine2"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            State
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.registeredAddress.state}
                            readOnly={this.state.readOnly}
                            name = "registeredAddress.state"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Pin Code
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.registeredAddress.pincode}
                            readOnly={this.state.readOnly}
                            name = "registeredAddress.pincode"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <h5 className="article__hdr">Operational</h5>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 1
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.operational.addressLine1}
                            readOnly={this.state.readOnly}
                            name = "operational.addressLine1"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            City
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.operational.city}
                            name = "operational.city"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Country
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.operational.country}
                            readOnly={this.state.readOnly}
                            name = "operational.country"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 2
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.operational.addressLine2}
                            readOnly={this.state.readOnly}
                            name = "operational.addressLine2"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            State
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.operational.state}
                            readOnly={this.state.readOnly}
                            name = "operational.state"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Pin Code
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue={this.state.basicDetails.operational.pincode}
                            readOnly={this.state.readOnly}
                            name = "operational.pincode"
                        onChange= {this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </FormGroup>
          </Widget>
        </div>
        <style>
          {
            `
              .loader{
                position: relative;
              }
              .showLoader{
                position: absolute;
                z-index: 999;
                top: 20vh;
              }
            `
          }
        </style>
      </div>
    );
  }
}

export default BasicDetails;
