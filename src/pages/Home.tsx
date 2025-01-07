import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation, useGetUserQuery } from "../redux/api/user-api";
import { IUser } from "../types";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const { data } = useGetUserQuery("");
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  };

  const handleEdit = (user: IUser) => {
    navigate("/create", { state: { user } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Users List
          </h2>
          {data && data.length > 0 ? (
            <div className="space-y-6">
              {data.map((user: IUser) => (
                <div
                  key={user.id}
                  className="p-4 border border-gray-200 rounded-md flex justify-between items-center"
                >
                  {/* User Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {user.name}
                    </h3>
                    <p className="text-gray-600">Age: {user.age}</p>
                    <p className="text-gray-600">Gender: {user.gender}</p>
                    <p className="text-gray-600">
                      Profession: {user.profession}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleEdit(user)}
                      className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all"
                    >
                      <FaPen className="mr-2" />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className={`flex items-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-4 focus:ring-red-300 transition-all ${
                        isDeleting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isDeleting}
                    >
                      <FaTrashAlt className="mr-2" />
                      {isDeleting ? "Delete" : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
