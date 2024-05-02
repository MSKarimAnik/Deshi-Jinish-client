import { useState } from 'react';
import Swal from 'sweetalert2';

const UpdatedCraft = ({ info, onUpdate, _id }) => {
  const [formData, setFormData] = useState({
    image: '',
    itemName: '',
    subcategoryName: '',
    description: '',
    price: '',
    rating: '',
    customization: 'No',
    processingTime: '',
    stockStatus: 'In stock',
    userEmail: '',
    userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateInfo = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/craft/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(data => {
      console.log(data);
      if (data.status === "success") {
        Swal.fire({
          title: 'Success!',
          text: 'User Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        onUpdate(data.updatedCraft); // Notify parent component about the update
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update user',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    })
    .catch(error => {
      console.error('Error updating user:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update user',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
        <h2 className='text-6xl font-extrabold text-blue-600 mb-8 text-center'>Update Craft Item</h2>
      <form onSubmit={handleUpdateInfo} className="space-y-4">
        <div>
          <label htmlFor="image" className="block mb-1">Image URL:</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="itemName" className="block mb-1">Item Name:</label>
          <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="subcategoryName" className="block mb-1">Subcategory Name:</label>
          <input type="text" id="subcategoryName" name="subcategoryName" value={formData.subcategoryName} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Short Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="rating" className="block mb-1">Rating:</label>
          <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="customization" className="block mb-1">Customization:</label>
          <select id="customization" name="customization" value={formData.customization} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="processingTime" className="block mb-1">Processing Time:</label>
          <input type="text" id="processingTime" name="processingTime" value={formData.processingTime} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="stockStatus" className="block mb-1">Stock Status:</label>
          <select id="stockStatus" name="stockStatus" value={formData.stockStatus} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="In stock">In stock</option>
            <option value="Made to Order">Made to Order</option>
          </select>
        </div>
        <div>
          <label htmlFor="userEmail" className="block mb-1">User Email:</label>
          <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="userName" className="block mb-1">User Name:</label>
          <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update</button>
        </div>
      </form>
    </div>
  );
};


export default UpdatedCraft;
