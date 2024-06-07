import Logo from "../../public/galizé.png";

const Header = () => {
  return (
    <header
      id="header"
      className="flex items-center justify-center gap-5 text-customGreen-500 font-bold"
    >
      <img src={Logo} alt="Logo" className="w-[128px] h-[128px]" />
      <h2 className="lg:text-[36px] md:text-[24px]">Galizé Perdido</h2>
    </header>
  );
};

export default Header;
