import React, { useState } from "react";

// Danh sách 9 account với avatar anime
const accounts = [
  {
    id: 1,
    username: "alice",
    password: "alice123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=alice",
  },
  {
    id: 2,
    username: "bob",
    password: "bob123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=bob",
  },
  {
    id: 3,
    username: "charlie",
    password: "charlie123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=charlie",
  },
  {
    id: 4,
    username: "diana",
    password: "diana123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=diana",
  },
  {
    id: 5,
    username: "edward",
    password: "edward123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=edward",
  },
  {
    id: 6,
    username: "fiona",
    password: "fiona123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=fiona",
  },
  {
    id: 7,
    username: "george",
    password: "george123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=george",
  },
  {
    id: 8,
    username: "hannah",
    password: "hannah123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=hannah",
  },
  {
    id: 9,
    username: "ian",
    password: "ian123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=ian",
  },
];

function SearchAccount() {
  const [search, setSearch] = useState("");

  const filteredAccounts = accounts.filter((acc) =>
    acc.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5" style={{ maxWidth: 1000 }}>
      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="mb-3 text-center text-primary fw-bold">Tìm kiếm Account</h2>
        <div className="row justify-content-center mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nhập username..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {filteredAccounts.length === 0 ? (
          <div className="alert alert-warning text-center">Không tìm thấy kết quả</div>
        ) : (
          <div className="row g-4">
            {filteredAccounts.map((acc) => (
              <div className="col-12 col-sm-6 col-md-4" key={acc.id}>
                <div className="card h-100 border-0 shadow-sm text-center p-3">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={acc.avatar}
                      alt={acc.username}
                      className="rounded-circle mb-3 border border-3 border-primary"
                      style={{
                        width: 90,
                        height: 90,
                        objectFit: "cover",
                        background: "#f8f9fa",
}}
                    />
                    <h5 className="mb-1 text-capitalize">{acc.username}</h5>
                    <span className="badge bg-secondary mb-2">ID: {acc.id}</span>
                    <div className="text-muted small">
                      <strong>Password:</strong> {acc.password}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchAccount;
