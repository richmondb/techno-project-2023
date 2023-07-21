'use client'
import React, {ReactNode, useState} from 'react';

interface Props {
    children: ReactNode;
}

// @ts-ignore
const Tabs = ({children}: Props) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div
            className="text-sm font-medium  border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <div className="flex border-b border-gray-300">
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${
                            activeTab === child.props.label ? 'border-b-2 border-blue-600 rounded-t-lg active text-green-800' : ''
                        } inline-block p-4 text-gray-600 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="py-4 transition-opacity duration-300 ease-linear">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({label, children}) => {
    return (
        <div label={label} className="hidden duration-500">
            {children}
        </div>
    );
};
export {Tabs, Tab};