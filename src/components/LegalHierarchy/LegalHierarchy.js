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

class LegalHierarchy extends React.Component {
  //   _click() {
  //     this.setState((prevState) => ({ readOnly: !prevState.readOnly }));
  //   }

  render() {
    return (
      <div>
        <div className="col-12">
          <HeaderProfile />

          <Table className="legal__Table">
            <thead>
              <tr className="fs-sm">
                <th className="hidden-sm-down">NAME</th>
                <th>TYPE</th>
                <th>RELATIONSHIP</th>
                <th className="hidden-sm-down">% OF OWNERSHIP</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">ABC Holdings PLCq</td>
                <td className="hidden-sm-down">Organization</td>
                <td className="hidden-sm-down">Parent</td>
                <td className="hidden-sm-down">51</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default LegalHierarchy;
