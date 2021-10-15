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

class RiskQuestionnaire extends React.Component {
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
        }
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

export default RiskQuestionnaire;
