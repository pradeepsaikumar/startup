import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/users")
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  const approveUser = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/approve/${id}`);
      setUsers(users.map(u => (u._id === id ? { ...u, role: "Admin", approved: true } : u)));
    } catch (err) {
      console.error("Approval failed:", err);
    }
  };

  if (loading) return <p className="text-white p-4">Loading users...</p>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u._id} className="mb-3">
              {u.name} - {u.email} - {u.role}
              {!u.approved && (
                <button
                  onClick={() => approveUser(u._id)}
                  className="ml-4 px-3 py-1 bg-blue-600 rounded"
                >
                  Approve as Admin
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
