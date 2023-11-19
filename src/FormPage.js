import React, { useState } from "react";
import "./FormPage.css";

export default function FormPage() {
  const [formData, setFormData] = useState({
    // id: Number,
    naturalCode: "",
    firstName: "",
    lastName: "",
    jobDescription: "",
    headerTitle: "",
    websiteTopLink: "",
    websiteTopTitle: "",
    mobile: "",
    email: "",
    linkedinLink: "",
    // completed: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://185.164.73.233:8000/api/person/create/`;

    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    //   try {
    //   const response = await fetch(url); // No body for GET request

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log("Data retrieved successfully", data);
    //   } else {
    //     console.log("Error");
    //   }
    // } catch (error) {
    //   console.error("Error retrieving data:", error);
    // }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Natural Code:
          <input
            type="text"
            name="naturalCode"
            value={formData.naturalCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job Description:
          <input
            type="text"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="job"
          />
        </label>
        <br />
        <label>
          Header Title:
          <input
            type="text"
            name="headerTitle"
            value={formData.headerTitle}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Website Top Link:
          <input
            type="text"
            name="websiteTopLink"
            value={formData.websiteTopLink}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Website Top Title:
          <input
            type="text"
            name="websiteTopTitle"
            value={formData.websiteTopTitle}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Linkedin Link:
          <input
            type="text"
            name="linkedinLink"
            value={formData.linkedinLink}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
