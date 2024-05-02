import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CraftCard = ({ craft }) => {
    const { _id, itemName, subcategoryName, description, price } = craft;
    // Rest of your component code...

   

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craft/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Info has been deleted",
                icon: "success"
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete info",
                icon: "error"
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting information:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete information.",
              icon: "error"
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>{subcategoryName}</p>
          <p>{description}</p>
          <p>{price}</p>


          


          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn">View</button>
              {/* Add link to edit page if needed */}
              <Link to={`/updateInfo/${_id}`}>
  <button className="btn">Edit</button>
</Link>
              <button
  onClick={() => handleDelete(_id)}
  className="btn bg-orange-500"
>
  X
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CraftCard;