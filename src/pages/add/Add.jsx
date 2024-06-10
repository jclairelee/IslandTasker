import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="add-container">
        <h1>Add New Task</h1>
        <div className="add__sections">
          <div className="add__sections__info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="cleaning">Cleaning Task</option>
              <option value="care">Care Task</option>
              <option value="yardwork">Yard Work Task</option>
              <option value="errands">Errands Task</option>
              <option value="other">Other Assistance</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="add__sections__details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. Page design" />
            <input type="text" placeholder="e.g. File uploading" />
            <input type="text" placeholder="e.g. Setting up a domain" />
            <input type="text" placeholder="e.g. Hosting" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
