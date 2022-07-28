import "./App.css";
import { useState } from "react";
import React from "react";
import { Tabs, Tab } from "@mui/material";
import Personal from "./Tabs/Personal";
import Team from "./Tabs/Team";
import Company from "./Tabs/Company";

function App() {
  const [tab, setTab] = useState(0);

  const handleChange = (e, tab) => {
    setTab(tab);
  };

  const tabs = ["Company", "Team", "Personal"];

  const TabChildren = () => {
    let children;
    switch (tabs[tab]) {
      case "Company":
        children = <Company />;
        break;
      case "Team":
        children = <Team />;
        break;
      case "Personal":
        children = <Personal />;
        break;
      default:
        break;
    }
    return children;
  };

  return (
    <div className="app">
      <header className="header">
        <div className="top">
          <h1 className="title">Replace App</h1>
          <span className="subtitle">Carbon footprint calculator</span>
        </div>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="disabled tabs example"
          classes={{ root: "tabs", scroller: "tabs-scroller" }}
        >
          {tabs.map((tab) => (
            <Tab label={tab} classes={{ root: "tab", selected: "tab-selected" }} />
          ))}
        </Tabs>
        <div className="tabs-children">
          <TabChildren />
        </div>
      </header>
    </div>
  );
}

export default App;
