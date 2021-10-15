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
import search from "../../images/loupe.png";
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

class MyClients extends React.Component {
  constructor() {
    super();
    localStorage.setItem('pathName', '2');
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
          <div className="text-center py-4 clients__sec">
            <h3 className="cli__hdr">My Clients</h3>
            <span>Entities who provided access to their KYC profiles </span>
          </div>

          <div className="position-relative">
              <input type="text" className="form-control input__search" placeholder="" value="" />
            <img src={search} className="search__icon" alt="search" />
          </div>
          <Table className="fatca__Table">
            <thead>
              <tr className="fs-sm">
                <th className="hidden-sm-down">Entity Name</th>
                <th>Country</th>
                <th>KYC Status</th>
                <th>Last Updated Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="fs-sm">
                <td className="hidden-sm-down">
                  <a href="#">XYZ Company Private Limited</a>
                </td>
                <td className="hidden-sm-down">Australia</td>
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
                <td className="hidden-sm-down">
                  {" "}
                  <a href="#">ABC Company Private Limited</a>
                </td>
                <td className="hidden-sm-down">Singapore</td>
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
        </div>
      </div>
    );
  }
}

export default MyClients;
