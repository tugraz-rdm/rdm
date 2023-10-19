import React, { FC, useState } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  className = '',
  selected = false,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3 text-sm font-medium text-gray-900 ${
      selected ? 'bg-gray-700 text-white' : ''
    } hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-700 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${className}`}>
    {label}
  </button>
);

const ButtonLANGroup: FC = () => {
  const [selectedLang, setSelectedLang] = useState('EN');

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button
        label="EN"
        onClick={() => setSelectedLang('EN')}
        selected={selectedLang === 'EN'}
        className="border border-gray-900 rounded-l-lg"
      />
      <Button
        label="DE"
        onClick={() => setSelectedLang('GE')}
        selected={selectedLang === 'GE'}
        className="border border-gray-900 rounded-r-md"
      />
    </div>
  );
};

export default ButtonLANGroup;
