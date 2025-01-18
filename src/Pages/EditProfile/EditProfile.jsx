import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const EditProfile = () => {
  const { user, updateUserProfile } = useAuth(); // Custom hook for get user data

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, photoURL);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile updated successfully",
        showCancelButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to update profile",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-green-600">
            Edit Profile
          </h1>
          <div className="flex flex-col items-center mb-6">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-4 border border-gray-300"
            />

            <p>{user?.displayName || "Your Name"}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Display Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="m-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="url"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter image URL"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-semibold transition duration-200"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
