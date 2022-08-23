import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';

function Tab({ tab, handleClick, isActive }) {
  return <button className={`btn${isActive ? ' active' : ''}`} key={tab.id} onClick={() => handleClick(tab)}>Tab {tab.title}</button>
}

function App() {

  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1", content: "tab 1 content" },
    { id: 2, title: "Tab 2", content: "tab 2 content" },
    { id: 3, title: "Tab 3", content: "tab 3 content" },
   
  ])
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  function handleClick(tab) {
    if(selectedTab.id != tab.id) {
      setSelectedTab(tab)
    }
  }

  return (
    <div className="App">
      <div className="tabs">
        {tabs.map((tab) => <Tab tab={tab} handleClick={handleClick} isActive={tab.id == selectedTab.id} />)}
      </div>
      <div className="content">
        {selectedTab.content}
      </div>
    </div>
  );
}

export default App;
