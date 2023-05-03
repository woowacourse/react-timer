interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return <header>{title}</header>;
};

export default Header;
