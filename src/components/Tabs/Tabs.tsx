import React, { ReactNode, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../style.css';

type tabData = {
  key: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export interface TabsProps {
  /**  Mark the tab with a matching `key` as active. */
  activeKey?: string;
  /** The default active key that is selected on start */
  defaultActiveKey?: string;
  /** An array of data used to create the tabs */
  data: tabData[];
  /** Additional custom classNames */
  className?: string;
}

const Tabs = ({
  className = '',
  activeKey,
  defaultActiveKey,
  data,
  ...rest
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey || null);

  useEffect(() => {
    setActiveTab(activeKey);
  }, [activeKey]);

  const onTabClick = (key) => {
    if (!activeKey) {
      setActiveTab(key);
    }
  };

  const renderTabs = () =>
    data.map((tab) => (
      <li
        className={`${tab.className} ${activeTab === tab.key ? 'active' : ''}`}
        role="presentation"
        key={tab.key}
      >
        {/* eslint-disable-next-line */}
        <a
          id="details-panel2-lnk"
          onClick={() => {
            onTabClick(tab.key);
          }}
          role="tab"
          aria-controls="details-panel2"
        >
          {tab.title}
        </a>
      </li>
    ));

  const renderTabContent = () => {
    let tabContent = null;
    for (let i = 0; i < data.length; i += 1) {
      const tab = data[i];
      if (activeTab === tab.key) {
        tabContent = (
          <>
            <summary
              className="wb-toggle tgl-tab wb-init wb-toggle-inited"
              data-toggle='{"parent": "#wb-auto-2", "group": ".wb-auto-2-grp"}'
              aria-hidden="true"
              id="wb-auto-4"
              role="tab"
            >
              {tab.title}
            </summary>
            <div className="tgl-panel" aria-labelledby="wb-auto-4">
              {tab.children}
            </div>
          </>
        );
      }
    }
    return tabContent;
  };

  return (
    <div
      className={`wb-tabs wb-init wb-tabs-inited tabs-acc ${className}`}
      id="wb-auto-2"
    >
      <ul role="tablist" className="">
        {renderTabs()}
      </ul>

      <div className="tabpanels">
        <details
          id="details-panel"
          open
          className="wb-auto-2-grp fade in"
          role="tabpanel"
          aria-hidden="false"
          aria-labelledby="details-panel2-lnk"
        >
          {renderTabContent()}
        </details>
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
