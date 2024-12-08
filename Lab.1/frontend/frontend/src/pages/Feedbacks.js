import React, { useState } from 'react';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      ...formData,
      date: new Date().toLocaleString(),
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    // Clear form
    setFormData({ name: '', email: '', comment: '' });
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Feedbacks</h1>

      {/* Feedback Form */}
      <div style={styles.feedbackFormContainer}>
        <h2>Leave Your Feedback</h2>
        <form onSubmit={handleSubmit} style={styles.feedbackForm}>
          <div style={styles.formGroup}>
            <label>Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Feedback:</label>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              required
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.submitBtn}>Submit Feedback</button>
        </form>
      </div>

      {/* Display Feedbacks */}
      <div style={styles.feedbackListContainer}>
        <h2>All Feedbacks</h2>
        {feedbacks.length === 0 ? (
          <p>No feedbacks yet. Be the first to leave a feedback!</p>
        ) : (
          feedbacks.map((feedback, index) => (
            <div key={index} style={styles.feedbackItem}>
              <p><strong>Name:</strong> {feedback.name}</p>
              <p><strong>Email:</strong> {feedback.email}</p>
              <p><strong>Date:</strong> {feedback.date}</p>
              <p><strong>Feedback:</strong> {feedback.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Define styles
const styles = {
  pageContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '36px',
    fontWeight: 'bold',
  },
  feedbackFormContainer: {
    maxWidth: '600px',
    margin: '0 auto 40px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  feedbackForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '100px',
  },
  submitBtn: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  feedbackListContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  feedbackItem: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f4f4f4',
    marginBottom: '20px',
  },
};

export default Feedbacks;
