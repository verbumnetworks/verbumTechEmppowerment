import Link from "next/link";

type DonateButtonProps = {
  link: string;
  label?: string;
  className?: string;
  variant?: "primary" | "outline";
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const DonateButton: React.FC<DonateButtonProps> = ({
  link,
  label = "Donate Now",
  className = "",
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-2 rounded shadow-md transition-all duration-300 ${className}`}
    >
      {label}
    </Link>
  );
};

export default DonateButton;
