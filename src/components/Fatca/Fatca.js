import React from "react";
import { ButtonGroup } from "reactstrap";
import Badge from "reactstrap/lib/Badge";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import Label from "reactstrap/lib/Label";
import Progress from "reactstrap/lib/Progress";
import Row from "reactstrap/lib/Row";
import Table from "reactstrap/lib/Table";
import UncontrolledButtonDropdown from "reactstrap/lib/UncontrolledButtonDropdown";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import Widget from "../../components/Widget/Widget";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import ToggleSwitch from "../../pages/toggleSwitch/toggleSwitch";
import more from "../../images/more.png";

const SortableItem = SortableElement(({ value }) => (
  <li className="list-group-item">
    <button className="close flex-last ml-auto" data-dismiss="alert">
      <ToggleSwitch />
    </button>
    {value.text}
  </li>
));

const SortableList = SortableContainer(({ items }) => (
  <ul className="list-group list-group-sortable mt-xs">
    {items.map((value, index) => (
      <SortableItem
        key={`item-${index.toString()}`}
        index={index}
        value={value}
      />
    ))}
  </ul>
));

class Fatca extends React.Component {
  constructor() {
    super();
    this.state = {
      sortableList: [
        {
          id: "03",
          text: "Is entity an offshore trust?",
        },
        {
          id: "01",
          text: "Does entity have complex structure if ownership?",
        },
        {
          id: "04",
          text: "Is the entity an unregulated investment / fund manager?",
        },
        {
          id: "02",
          text: "Is entity an FGO or Embassy or Consulate from a high risk country?",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="col-12">
          <HeaderProfile />
          <Table className="fatca__Table">
            <thead>
              <tr className="fs-sm">
                <th className="hidden-sm-down">#</th>
                <th>TYPE</th>
                <th>Value</th>
                <th>Status</th>
                <th>Last Updated Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="fs-sm">
                <td className="hidden-sm-down">1</td>
                <td className="hidden-sm-down">
                  Global Intermediary Identification Number (GIIN)
                </td>
                <td className="hidden-sm-down">12345678</td>
                <td className="hidden-sm-down">
                  <Button
                    color="success"
                    type="submit"
                    className="btn-sm mr-xs"
                  >
                    Verified
                  </Button>
                </td>
                <td className="hidden-sm-down">10 Jul 2021</td>
                <td className="hidden-sm-down">
                  <img src={more} width="15" alt="options" />
                </td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">1</td>
                <td className="hidden-sm-down">Value Added Tax (VAT) Number</td>
                <td className="hidden-sm-down">ABC23483KJD</td>
                <td className="hidden-sm-down">
                  <Button
                    color="success"
                    type="submit"
                    className="btn-sm mr-xs"
                  >
                    Verified
                  </Button>
                </td>
                <td className="hidden-sm-down">10 Jul 2021</td>
                <td className="hidden-sm-down">
                  <img src={more} width="15" alt="options" />
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="mb-4">
            <div className="border-bottom pb-3 mb-4">
              <h5 className="sec__hdr">Chapter 4</h5>
            </div>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    Chapter 4 FATCA Status
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="ABC Corporation"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    Federal Tax Classification Status
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="Registered"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    US Tax Classification Status
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="1002343-AXZSDF"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    W9 Exemption from FATCA Reporting
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="-"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    Recalcitrant Flag
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="True"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    W9 Exempt Payee
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="ABC xyz"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <div className="border-bottom pb-3 mb-4">
              <h5 className="sec__hdr">Chapter 3</h5>
            </div>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                  Chapter 3 FATCA Status
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="ABC Corporation"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    Federal Tax Classification Status
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="Registered"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    US Tax Classification Status
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="1002343-AXZSDF"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    W9 Exemption from FATCA Reporting
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="-"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    Recalcitrant Flag
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="ABC4097092374092BDJ3"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="no-borders-input" className="trans-label">
                    W9 Exempt Payee
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search Dashboard"
                    id="no-borders-input"
                    className="input-no-border bg-gray-lighter"
                    value="1122 - Food and Beverages"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Fatca;
