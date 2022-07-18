import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  }

  return (
    <div className="App">
      {/* <button className="btn btn-primary">Click me</button> */}
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>


      {/* ############# ORIGINAL CONTENT #################
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
