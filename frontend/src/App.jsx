import React, { useState, useEffect, useRef } from 'react';
import { getRequiredXP } from './utils/experience';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import StatusPage from './pages/StatusPage';
import MyPage from './pages/MyPage';
import CompletedPage from './pages/CompletedPage';
import CreateTaskPage from './pages/CreateTaskPage';
import Navigation from './components/Navigation';
import HUD from './components/HUD';
import FloatingAddButton from './components/FloatingAddButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Goblin Attack', difficulty: 'Easy', xp: 50, type: 'daily' },
    { id: 2, title: 'Troll Blockade', difficulty: 'Hard', xp: 100, type: 'weekly' }
  ]);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [coins, setCoins] = useState(0);
  const [stats, setStats] = useState({ STR: 1, DEX: 1, INT: 1, VIT: 1 });
  const [statPoints, setStatPoints] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [theme, setTheme] = useState('dark');
  const prevLevel = useRef(1);
  const maxHp = 100 + stats.VIT * 10;
  const hp = maxHp;

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

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

  const playSuccessSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) {
      console.error('Audio error', e);
    }
  };

  const allocateStat = (key) => {
    if (statPoints <= 0) return;
    setStats(prev => ({ ...prev, [key]: prev[key] + 1 }));
    setStatPoints(prev => prev - 1);
  };

  const completeTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      playSuccessSound();
      setCoins(prev => prev + task.xp / 10);
      setXp(prevXp => {
        let newXp = prevXp + task.xp;
        let currLevel = level;
        let levelUps = 0;
        while (newXp >= getRequiredXP(currLevel)) {
          newXp -= getRequiredXP(currLevel);
          currLevel += 1;
          levelUps += 1;
        }
        if (levelUps > 0) {
          setLevel(currLevel);
          setStatPoints(prev => prev + levelUps * 5);
          window.confetti && window.confetti();
        }
        return newXp;
      });
      setCompleted(prev => [...prev, { ...task, completedAt: new Date().toLocaleString() }]);
      toast.success(`✨ ${task.title} defeated! XP +${task.xp}!`);
    }
    setTasks(prev => prev.filter(t => t.id !== id));
  };



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TaskPage tasks={tasks} completeTask={completeTask} />} />
          <Route path="/status" element={<StatusPage xp={xp} level={level} stats={stats} statPoints={statPoints} allocateStat={allocateStat} />} />
          <Route path="/mypage" element={<MyPage xp={xp} level={level} completed={completed} setTheme={setTheme} theme={theme} coins={coins} />} />
          <Route path="/completed" element={<CompletedPage completed={completed} />} />
          <Route path="/create" element={<CreateTaskPage addTask={addTask} />} />
        </Routes>
        <HUD level={level} xp={xp} coins={coins} hp={hp} maxHp={maxHp} />
        <FloatingAddButton />
        <Navigation />
        <ToastContainer position="bottom-center" autoClose={1500} hideProgressBar={true} />
      </div>
    </Router>
  );
}

export default App;
