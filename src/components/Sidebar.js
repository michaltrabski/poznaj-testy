import React, { Component } from "react";
import MichalContext from "./../context/MichalContext";
import { Form } from "react-bootstrap/";

class Sidebar extends Component {
  static contextType = MichalContext;

  render() {
    return (
      <>
        <p>Sidebar:</p>

        <Form>
          {["checkbox"].map(type => (
            <div key={`custom-${type}`} className="mb-3">
              <Form.Check
                custom
                type={type}
                id={`custom-${type}`}
                label="Ukryj prawidłowe odpowiedzi"
                checked={this.context.showRightAnswerNow}
                onChange={this.context.toggleshowRightAnswerNow}
              />
            </div>
          ))}
        </Form>

        <Form.Group controlId="userCanSelectCategory">
          <Form.Label>Kategoria prawa jazdy:</Form.Label>
          <Form.Control
            as="select"
            value={this.context.currentCategory}
            onChange={() => alert("changed select")}
          >
            {this.context.userCanSelectCategory.map(item => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </>
    );
  }
}

export default Sidebar;
