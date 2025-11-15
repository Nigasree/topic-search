import React, { useState } from "react";
import "../TopicSearch.css";   // <-- Correct path

const TopicSearch = () => {
  const topics = [
    { id: 1, name: "Thermodynamics", category: "Physics" },
    { id: 2, name: "Organic Chemistry", category: "Chemistry" },
    { id: 3, name: "Algebra", category: "Mathematics" },
    { id: 4, name: "Human Anatomy", category: "Biology" },
    { id: 5, name: "World History", category: "History" }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="title">Topic Search</h2>

      <input
        type="text"
        placeholder="Search topics..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="topics-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="no-topics">No topics found</p>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;
