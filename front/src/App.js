import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import DeleteTaskPage from './pages/DeleteTaskPage';
import CompleteTaskPage from './pages/CompleteTaskPage';

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.sidebar}>
          <div style={styles.profileSection}>
            <img 
              src="https://via.placeholder.com/100" 
              alt="Profile" 
              style={styles.profilePic} 
            />
            <p style={styles.profileName}>Seu Nome</p>
          </div>
          <div style={styles.navLinks}>
            <Link style={styles.navButton} to="/tasks">View Tasks</Link>
            <Link style={styles.navButton} to="/tasks/create">Create Task</Link>
            <Link style={styles.navButton} to="/tasks/edit">Edit Task</Link>
            <Link style={styles.navButton} to="/tasks/delete">Delete Task</Link>
            <Link style={styles.navButton} to="/tasks/complete">Complete Task</Link>
          </div>
        </nav>
        <main style={styles.content}>
          <Routes>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/create" element={<CreateTaskPage />} />
            <Route path="/tasks/edit" element={<EditTaskPage />} />
            <Route path="/tasks/delete" element={<DeleteTaskPage />} />
            <Route path="/tasks/complete" element={<CompleteTaskPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  profileSection: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  profilePic: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  profileName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
  },
  navButton: {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '14px',
  },
  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
};

export default App;
