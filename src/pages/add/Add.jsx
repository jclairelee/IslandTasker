import React from "react";
import "./Add.scss";
import {
  sectionsInfoFields,
  sectionsDetailsFields,
} from "../../../temporaryData";
const Add = () => {
  const renderFields = (fields) => {
    return fields.map((field, index) => {
      if (field.type === "select") {
        return (
          <div key={index} className="add__sections__infoContent">
            <label htmlFor="">{field.label}</label>
            <select name="cats" id="cats">
              {field.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      } else if (field.type === "textarea") {
        return (
          <div key={index} className="add__sections__infoContent">
            <label htmlFor="">{field.label}</label>
            <textarea
              name=""
              id=""
              placeholder={field.placeholder}
              rows={field.rows}
            ></textarea>
          </div>
        );
      } else {
        return (
          <div key={index} className="add__sections__infoContent">
            <label htmlFor="">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              multiple={field.multiple}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className="add">
      <div className="add-container">
        <h1>Add New Task</h1>
        <div className="add__sections">
          <div className="add__sections__info">
            {renderFields(sectionsInfoFields)}
            <button>Create</button>
          </div>
          <div className="add__sections__details">
            {renderFields(sectionsDetailsFields)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
