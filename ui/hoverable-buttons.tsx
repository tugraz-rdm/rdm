import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

type Button = {
  text: string;
  link: string;
};

type ItemProps = {
  buttons?: Button[];
  slug?: string;
};

type HoverableButtonsProps = {
  item: ItemProps;
};

const HoverableButtons: React.FC<HoverableButtonsProps> = ({ item }) => {
  const router = useRouter();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    button: Button
  ) => {
    e.stopPropagation();
    switch (button.text) {
      case 'Launch':
        window.open(button.link, '_blank');
        break;
      case 'Read More':
        router.push(`/${item.slug}`);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="h-48 w-full transform bg-white object-cover transition-transform duration-500 hover:scale-110" />
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-full w-full space-x-3">
          {item.buttons?.map((button, index) => (
            <a
              key={index}
              href="#"
              onClick={e => handleClick(e, button)}
              className="font-regular flex w-full items-center justify-center rounded border border-gray-900 px-4 py-2 text-gray-900 z-10">
              {button.text}
              <div className="mt-2 inline-flex cursor-pointer items-center text-gray-700 hover:underline">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mb-2 ml-2.5 h-3 w-3"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverableButtons;
