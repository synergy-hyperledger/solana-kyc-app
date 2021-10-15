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

class KycQuestionnaire extends React.Component {
  constructor() {
    super();
    this.state = {
      sortableList: [
        {
          id: "03",
          text: "Business interest in defence goods or services?",
        },
        {
          id: "01",
          text: "Business interest in Payments, Challenger banking, Mobile/Digital Wallet, Stored Values, Loan platform, Digital assets and Virtual currencies?",
        },
        {
          id: "04",
          text: "Is a Fintech offering financial services?",
        },
        {
          id: "02",
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness",
        },
        {
          id: "05",
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising paint the truth, the master-builder of human happiness",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="col-12">
          <HeaderProfile />

          <Widget close refresh settings>
            <SortableList
              items={this.state.sortableList}
              onSortEnd={this.onSortEnd}
            />
          </Widget>
        </div>
      </div>
    );
  }
}

export default KycQuestionnaire;
