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
      className={`inline-block bg-[#b41313] hover:bg-[#8F0000] text-white font-semibold py-2 px-2 rounded shadow-md transition duration-300 ${className}`}
    >
      {text}
    </Link>
  );
};

export default DonateButton;
