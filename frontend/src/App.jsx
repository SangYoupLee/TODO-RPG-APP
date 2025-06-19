import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import StatusPage from './pages/StatusPage';
import MyPage from './pages/MyPage';
import CreateTaskPage from './pages/CreateTaskPage';
import Navigation from './components/Navigation';
import FloatingAddButton from './components/FloatingAddButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Goblin Attack', difficulty: 'Easy', xp: 50, type: 'daily' },
    { id: 2, title: 'Troll Blockade', difficulty: 'Hard', xp: 100, type: 'weekly' }
  ]);
  const [xp, setXp] = useState(0);

  const addTask = (task) => {
    const xpMap = { Easy: 50, Medium: 75, Hard: 100 };
    const newTask = {
      ...task,
      id: Date.now(),
      xp: xpMap[task.difficulty] || 50,
      type: task.type || 'daily'
    };
    setTasks(prev => [...prev, newTask]);
  };

  const completeTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setXp(prev => prev + task.xp);
      toast.success(`+${task.xp} XP! 건타 처치: ${task.title}`);
    }
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const calculateLevel = (xp) => Math.floor(xp / 100) + 1;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TaskPage tasks={tasks} completeTask={completeTask} />} />
          <Route path="/status" element={<StatusPage xp={xp} level={calculateLevel(xp)} />} />
          <Route path="/mypage" element={<MyPage xp={xp} level={calculateLevel(xp)} />} />
          <Route path="/create" element={<CreateTaskPage addTask={addTask} />} />
        </Routes>
        <FloatingAddButton />
        <Navigation />
        <ToastContainer position="bottom-center" autoClose={1500} hideProgressBar={true} />
      </div>
    </Router>
  );
}

export default App;