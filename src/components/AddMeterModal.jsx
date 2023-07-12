import React, { useState } from "react";
import "./AddMeterModal.styles.css";
import Popup from "reactjs-popup";

import axios from "axios";

const AddMeterModal = () => {
  const defaultField = {
    api_name: "",
    display_name: "",
    active: true,
    used_for_billing: true,
    type: "max",
  };

  const [field, setField] = useState(defaultField);
  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "true" || value === "false") {
      value = JSON.parse(value);
    }
    setField({
      ...field,
      [e.target.name]: value,
    });
  };
  const resetField = () => {
    setField(defaultField);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      api_name: field.api_name,
      display_name: field.display_name,
      active: field.active,
      used_for_billing: field.used_for_billing,
      type: field.type,
    };
    axios
      .post("https://take-home-exercise-api.herokuapp.com/meters", userData, {
        headers: {
          "API-KEY":
            "4118cfab9b7ffe6c9e82e8a6c1158a2a52e79401c77d39fd272857cb0c70233d",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.status, response.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          console.log("server responsed");
        } else if (err.request) {
          console.log("network error");
        } else {
          console.log(err);
        }
      })

      .finally(() => {
        resetField();
      });
    alert("Added new meter!");
  };

  return (
    <div className="MeterContainer">
      <Popup
        trigger={<button className="AddMeterButton"> Add meter </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="content">
              <h1>Create New Meter</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="FormContainer">
                  <label>
                    {" "}
                    API Name
                    <input
                      className="FieldInput"
                      type="text"
                      name="api_name"
                      value={field.api_name}
                      placeholder="API Name"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Display Name
                    <input
                      className="FieldInput"
                      type="text"
                      name="display_name"
                      value={field.display_name}
                      placeholder="Display Name"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Active
                    <select
                      className="FieldInput"
                      value={field.active}
                      onChange={handleChange}
                      name="active"
                    >
                      <option value={true}> Active</option>
                      <option value={false}> Inactive</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    Used For Billing
                    <select
                      onChange={handleChange}
                      name="used_for_billing"
                      value={field.used_for_billing}
                      className="FieldInput"
                    >
                      <option value={true}> True</option>
                      <option value={false}> False</option>
                    </select>
                  </label>
                </div>

                <div>
                  <label>
                    Type
                    <select
                      value={field.type}
                      onChange={handleChange}
                      name="type"
                      className="FieldInput"
                    >
                      <option value="max"> Max</option>
                      <option value="sum"> Sum</option>
                      <option value="unique_count"> Unique Count</option>
                    </select>
                  </label>
                </div>
              </form>
            </div>
            <div className="MeterButtonContainer">
              <button
                type="submit"
                onClick={handleSubmit}
                className="SubmitButton"
              >
                Add meter
              </button>
              <button onClick={() => close()} className="CloseModalButton">
                Close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default AddMeterModal;
