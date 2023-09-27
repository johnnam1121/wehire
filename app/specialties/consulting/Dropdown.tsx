'use client'
import { useState } from 'react';
import { SlPlus, SlMinus } from "react-icons/sl";

interface DropdownProps {
  title: string;
  content: string[] | { [category: string]: string[] };
}

const Dropdown: React.FC<DropdownProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentClasses = isOpen ? 'max-h-screen overflow-y-hidden duration-700 ease-in' : 'max-h-0 duration-700 ease-out';

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <div>
          <ul className="list-disc ml-6">
            {content.map((item, index) => (
              <li key={index} className="mb-1 text-lg font-bold">{item}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          {Object.keys(content).map((category, index) => (
            <div key={index}>
              <ul className="mb-1 list-disc ml-6 text-lg font-bold"><li>{category}</li></ul>
              <ul className="list-disc ml-12">
                {content[category].map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1 text-lg font-bold">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-1 cursor-pointer py-4" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="flex items-center text-2xl font-semibold hover:text-customTeal transition ease-in duration-150" style={{ color: isOpen ? '#00c3ba' : '#777' }} >{title}</h3>
        {isOpen ? <SlMinus color='#00c3ba' size={25} /> : <SlPlus color='#00c3ba' size={25} />}
      </div>
      <div className={contentClasses}>
        {isOpen && renderContent()}
      </div>
      <hr className="border-1" />
    </div>
  );
};

export default Dropdown