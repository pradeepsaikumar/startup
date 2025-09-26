import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <h2 className="text-center mt-10 text-xl">Loading user info...</h2>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name} 👋</h1>

      <div className="bg-gray-100 shadow-lg rounded-xl p-6 max-w-md">
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Role:</span> {user.role}</p>
      </div>
    </div>
  );
}
