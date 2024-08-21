import React, { useState, useEffect } from 'react';
import { TAB_LIST } from '../utils/helper';

const Tabs = () => {
  const getQuery = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(param), 10);
  };

  const initialTab = getQuery('tab') || 0;
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('tab', activeTab);
    window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
  }, [activeTab]);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='container max-w-[1140px] mx-auto'>
        <div className="tabs flex justify-between">
          {TAB_LIST.map((obj, i) => (
            <button
              key={i}
              className={`tab-button px-7 py-4 text-4xl border-2 border-solid font-medium ${activeTab === i ? 'bg-yellow-600 text-white border-red-700' : 'text-gray-600 border-black'}`}
              onClick={() => setActiveTab(i)}
            >
              {obj}
            </button>
          ))}
        </div>
        <div className="tab-content p-4 mt-6">
          {TAB_LIST.map((item, i) => (
            activeTab === i ? <div key={i} className='text-center text-3xl font-medium'>Content for Tab {i + 1}
              <p className='text-xl font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut.</p>
            </div> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
