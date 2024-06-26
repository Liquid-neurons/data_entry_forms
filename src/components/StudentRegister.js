import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getConfig } from './contexts/config';


function StudentRegister() {
const{api}=getConfig();
const navigate = useNavigate();
const { applicationId } = useParams();  
const [formData, setFormData] = useState({
    A_DATE: '',
    STUDENTID: applicationId,
    CLASS: '',
    R_FEE: '',
    R_DATE: '',
    INSTITUTE: '',
    S_FEE: '',
    S_DATE: '',
    SESSION: '',
    REMARK: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);

    console.log(formData);
  
    // Send JSON data to backend
    fetch(`${api.base_url}/student-register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      if (data.success) {
        alert('Data entered successfully');
        navigate('/register')
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Optionally, you can handle errors here
    });
  };

  return (
    <div class="form-container max-w-lg mx-auto p-6 bg-white rounded shadow-lg">
    <h2 class="form-header text-2xl font-semibold mb-4 flex justify-center">Student registration</h2>
    <form class="form grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div>
            <h2 class="text-xl font-bold mb-4">Student Details</h2>
            <div class="mb-4">
                <label for="studentid" class="form-label block font-semibold">Student ID :</label>
                <input type="text" name="STUDENTID" id="studentid" value={formData.STUDENTID} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="A_DATE" class="form-label block font-semibold">A_DATE* :</label>
                <input type="date" name="A_DATE" id="A_DATE" value={formData.A_DATE} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="class" class="form-label block font-semibold">Class* :</label>
                <input type="text" name="CLASS" id="class" value={formData.CLASS} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="R_FEE" class="form-label block font-semibold">R_FEE* :</label>
                <input type="text" name="R_FEE" id="R_FEE" value={formData.R_FEE} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="R_DATE" class="form-label block font-semibold">R_DATE* :</label>
                <input type="date" name="R_DATE" id="R_DATE" value={formData.R_DATE} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="institute" class="form-label block font-semibold">Institute* :</label>
                <select name="INSTITUTE" id="institute" value={formData.INSTITUTE} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full">
                    <option value="LMS">LMS</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="S_FEE" class="form-label block font-semibold">S_FEE* :</label>
                <input type="text" name="S_FEE" id="S_FEE" value={formData.S_FEE} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="S_DATE" class="form-label block font-semibold">S_DATE* :</label>
                <input type="date" name="S_DATE" id="S_DATE" value={formData.S_DATE} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="Session" class="form-label block font-semibold">Session* :</label>
                <input type="text" name="SESSION" id="session" value={formData.SESSION} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
            <div class="mb-4">
                <label for="remark" class="form-label block font-semibold">Remark* :</label>
                <input type="text" name="REMARK" id="session" value={formData.REMARK} onChange={handleChange} class="form-input border  rounded-md px-3 py-2 mt-1 mb-5 w-full" />
            </div>
        </div>
        <div class="col-span-2 flex justify-center mt-6">
        <button type="submit" class="form-button bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-12 rounded">Submit</button>
      </div>
    </form>
</div>

  );
}

export default StudentRegister;
