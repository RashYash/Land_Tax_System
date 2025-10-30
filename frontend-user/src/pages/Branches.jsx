import React from 'react';
import './Branches.css';  // Import the CSS file

const branches = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Branch Name ${i + 1}`,
  address: `Address ${i + 1}`,
  contact: `Contact ${i + 1}`,
}));

export default function Branches() {
  return (
    <div className="branches-page bg-white min-h-screen">
      <div className="search-bar">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      <main className="main-content">
        <h2 className="title">BRANCHES</h2>
        <div className="branches-list">
          {branches.map((branch, idx) => (
            <div
              key={branch.id}
              className={`branch-item ${idx === 0 ? 'first-branch' : ''}`}
            >
              <span className="branch-id">{String(branch.id).padStart(2, '0')}.</span>
              <span className="branch-name">{branch.name}</span>
              <span className="branch-address">{branch.address}</span>
              <span className="branch-contact">{branch.contact}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
