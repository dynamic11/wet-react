import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../style.css';

export interface TabsProps {
  /** Content of Tabs */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
  defaultActiveKey?: string;
  data: object[];
}

const Tabs = ({
  className = '',
  children,
  defaultActiveKey,
  data,
  ...rest
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey || null);

  const testData = [
    {
      key: 'key1',
      title: 'Tab 1',
      children: <h2>This is tab content</h2>,
      className: '',
    },
    {
      key: 'key2',
      title: 'Tab 2',
      children: <h2>This is tab content 2</h2>,
    },
    {
      key: 'key3',
      title: 'Tab 3',
      children: <h2>This is tab content as well</h2>,
    },
  ];

  // console.log("testData");

  const renderTabs = () =>
    testData.map((tab) => (
      <li
        className={`${tab.className} ${activeTab === tab.key ? 'active' : ''}`}
        role="presentation"
        key={tab.key}
      >
        {/* eslint-disable-next-line */}
        <a
          id="details-panel2-lnk"
          onClick={() => {
            setActiveTab(tab.key);
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
    for (let i = 0; i < testData.length; i += 1) {
      const tab = testData[i];
      if (activeTab === tab.key) {
        tabContent = (
          <>
            <summary
              className="wb-toggle tgl-tab wb-init wb-toggle-inited"
              data-toggle='{"parent": "#wb-auto-2", "group": ".wb-auto-2-grp"}'
              aria-hidden="true"
              id="wb-auto-4"
              role="tab"
              aria-posinset={2}
              aria-setsize={3}
            >
              {tab.title}
            </summary>
            <div
              className="tgl-panel"
              aria-labelledby="wb-auto-4"
              aria-hidden="false"
            >
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
          id="details-panel2"
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
