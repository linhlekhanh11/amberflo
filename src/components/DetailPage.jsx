import { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DetailPage.styles.css";

const DetailPage = ({ dataInfo }) => {
  const defaultMeter = [
    "0839b368-d3d1-41a3-9938-d4c6df8a3d64",
    "3a309982-720c-49b6-a28a-4f5d9d415509",
    "1634a14b-ecfa-405c-9113-5f71ae99b97a",
  ];
  const { id } = useParams();
  const navigate = useNavigate();
  const currValue = dataInfo.filter((data) => data.id === id);
  const defaultField = {
    api_name: currValue[0].api_name,
    display_name: currValue[0].display_name,
    active: currValue[0].active,
    used_for_billing: currValue[0].used_for_billing,
    type: currValue[0].type,
    id: currValue[0].id,
  };
  const [field, setField] = useState(defaultField);

  const isDefaultMeter = defaultMeter.includes(defaultField.id);

  const handleChange = (e) => {
    let value = e.target.value;
    if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
      value = JSON.parse(value);
    }
    setField({
      ...field,
      [e.target.name]: value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const userData = {
      api_name: field.api_name,
      display_name: field.display_name,
      active: field.active,
      used_for_billing: field.used_for_billing,
      type: field.type,
    };

    axios
      .put(
        `https://take-home-exercise-api.herokuapp.com/meters/${field.id}`,
        userData,
        {
          headers: {
            "API-KEY":
              "4118cfab9b7ffe6c9e82e8a6c1158a2a52e79401c77d39fd272857cb0c70233d",
            "Content-Type": "application/json",
          },
        }
      )
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
      });
    alert("Successfully edit a meter!");
    navigate("/");
  };
  const handleDelete = (e) => {
    e.preventDefault();
    alert("Deleted meter!");
    navigate("/");
    axios
      .delete(
        `https://take-home-exercise-api.herokuapp.com/meters/${field.id}`,

        {
          headers: {
            "API-KEY":
              "4118cfab9b7ffe6c9e82e8a6c1158a2a52e79401c77d39fd272857cb0c70233d",
            "Content-Type": "application/json",
          },
        }
      )
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
      });
  };

  return (
    <Fragment>
      <div className="DetailPageContainer">
        <div>
          <h2>Meter Details</h2>
          {isDefaultMeter && (
            <p>This is a default meter, you cannot make any changes!</p>
          )}
        </div>
        {currValue.map((list) => (
          <div key={list.id}>
            <div>
              <label className="label">
                API NAME
                <input
                  className="FieldDetail"
                  defaultValue={list.api_name}
                  required
                  onChange={handleChange}
                  name="api_name"
                  disabled={isDefaultMeter ? true : false}
                />
              </label>
            </div>
            <div>
              <label className="label">
                Display Name
                <input
                  className="FieldDetail"
                  defaultValue={list.display_name}
                  required
                  onChange={handleChange}
                  name="display_name"
                  disabled={isDefaultMeter ? true : false}
                />
              </label>
            </div>
            <div>
              <label className="label">
                Used For Billing
                <input
                  className="FieldDetail"
                  defaultValue={list.used_for_billing}
                  required
                  onChange={handleChange}
                  name="used_for_billing"
                  disabled={isDefaultMeter ? true : false}
                />
              </label>
            </div>
            <div>
              <label className="label">
                Active
                <input
                  className="FieldDetail"
                  defaultValue={list.active.toString()}
                  required
                  onChange={handleChange}
                  name="active"
                  disabled={isDefaultMeter ? true : false}
                />
              </label>
            </div>
            <div>
              <label className="label">
                Type
                <input
                  className="FieldDetail"
                  defaultValue={list.type.toString()}
                  required
                  onChange={handleChange}
                  name="type"
                  disabled={isDefaultMeter ? true : false}
                />
              </label>
            </div>
            <div className="ButtonContainer">
              <button
                onClick={handleEdit}
                disabled={isDefaultMeter ? true : false}
                className="EditButton"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                disabled={isDefaultMeter ? true : false}
                className="DeleteButton"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default DetailPage;
