import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-2">
      <p className="text-center text-slate-800 text-md">
        Copyright &copy; {new Date().getFullYear()} Shopfess
      </p>
    </footer>
  );
};

export default Footer;
