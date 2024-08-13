'use client';

import React, { useState } from 'react';

type SubStep = {
  description: string;
  note?: string;
  img?: string;
};

type Step = {
  number: number;
  title: string;
  subSteps: SubStep[];
};

type StepsComponentProps = {
  steps: Step[];
};

const StepsComponent: React.FC<StepsComponentProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const renderTitleWithLink = (title: string) => {
    const urlRegex = /(https:\/\/[^\s]+)/g;
    const parts = title.split(urlRegex);

    return parts.map((part, index) =>
      urlRegex.test(part) ? (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <ol className="w-full space-y-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex flex-col cursor-pointer ${
              index === activeStep
                ? 'text-gray-700 dark:text-gray-700'
                : 'text-gray-400 dark:text-gray-200'
            } space-y-2`}
            onClick={() => handleStepClick(index)}
            style={{ minWidth: '300%' }}>
            <span className="flex items-center space-x-3.5">
              <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 dark:border-gray-400">
                {step.number}
              </span>
              <span>
                <h3 className="font-medium leading-tight uppercase">
                  {renderTitleWithLink(step.title)}
                </h3>
              </span>
            </span>
            {index === activeStep &&
              step.subSteps.map((subStep, subIndex) => (
                <div key={subIndex} className="pl-10">
                  {subStep.img && (
                    <img
                      src={subStep.img}
                      alt="Step illustration"
                      className="mb-2"
                    />
                  )}
                  <p className="text-sm">{subStep.description}</p>
                  {subStep.note && <p className="text-sm">{subStep.note}</p>}
                </div>
              ))}
          </li>
        ))}
      </ol>
      <div className="navigation-controls">
        <button onClick={handlePreviousStep} disabled={activeStep === 0}>
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={activeStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepsComponent;

export const steps: Step[] = [
  {
    number: 1,
    title: 'Create user account',
    subSteps: [
      {
        description:
          'Note 1: “not provided” is an option to some questions in the second third tabular).',
        note: 'Note 2: The username and email will be linked to your TU Graz account in the next steps.',
        img: '/cyverse/cyverse-new-account-1.png',
      },
    ],
  },
  {
    number: 2,
    title: 'Registration',
    subSteps: [
      {
        description:
          'You will receive an email notification to set your password. If you have not received any email, please contact rdmteam@tugraz.at.',
        img: '/cyverse/cyverse-new-account-2.png',
      },
    ],
  },
  {
    number: 3,
    title: 'Login',
    subSteps: [
      {
        description:
          'Go to https://de.cyverse.tugraz.at/ and use the button in the right upper corner to login.',
        img: '/cyverse/cyverse-new-account-3.png',
      },
    ],
  },
  {
    number: 4,
    title: 'TU Graz Single Sign-On',
    subSteps: [
      {
        description:
          'Use TU Graz Single Sign-On to login. Login once with your above registered credentials and log out afterwards.',
        img: '/cyverse/cyverse-new-account-4.png',
      },
    ],
  },
  {
    number: 5,
    title: 'First time Login',
    subSteps: [
      {
        description:
          'The first time you use this option for logging in the system will ask you to link to a registered account from the user portal. Note: After having registered and linked your account you will be able to easily log in to the system via step 3 & 4 only!',
        img: '/cyverse/cyverse-new-account-5.png',
      },
    ],
  },
];
