type SectionTextProps = {
  title: string;
  content: string;
};

const SectionText: React.FC<SectionTextProps> = ({ title, content }) => {
  return (
    <div className="font-thin">
      <h2 className="text-1xl font-medium capitalize text-gray-300">
        {title.toUpperCase()}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-thin mb-3">
        {content}
      </p>
    </div>
  );
};

export default SectionText;
