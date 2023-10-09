import { ArrowRightIcon } from '@heroicons/react/outline';

export const ExternalLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="inline-flex gap-x-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-thin text-gray-100 no-underline hover:bg-gray-500 hover:text-white"
    >
      <div>{children}</div>
      <ArrowRightIcon className="block w-4" />
    </a>
  );
};
