import Link from 'next/link';

type DonateButtonProps = {
  link: string;
  text?: string;
  className?: string;
};

const DonateButton: React.FC<DonateButtonProps> = ({
  link,
  text = 'Donate Now',
  className = '',
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ${className}`}
    >
      {text}
    </Link>
  );
};

export default DonateButton;
