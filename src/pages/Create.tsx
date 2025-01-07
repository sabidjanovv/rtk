import { useLocation, useNavigate } from "react-router-dom";
import { useCreateUserMutation, useUpdateUserMutation } from "../redux/api/user-api";
import { IUserForm } from "../types";

const Create = () => {
  const navigate = useNavigate()
  const { state } = useLocation();
  const editingUser = state?.user || null;
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: IUserForm = Object.fromEntries(formData) as unknown as IUserForm;

    if (editingUser) {
      updateUser({ id: editingUser.id, body: data });
    } else {
      createUser(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {editingUser ? "Edit User" : "Add New User"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={editingUser?.name || ""}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Age
              </label>
              <input
                type="text"
                name="age"
                defaultValue={editingUser?.age || ""}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender
              </label>
              <select
                name="gender"
                defaultValue={editingUser?.gender || ""}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="">Prefer not to say</option>
                </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                defaultValue={editingUser?.profession || ""}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              onClick={() => navigate("/")}
            >
              {editingUser ? "Update User" : "Add User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
