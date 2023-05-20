import React from "react";

interface CompoundComponentsProps {
  children: React.ReactNode;
}

interface HeaderProps {
  title: string;
}

interface BodyProps {
  content: string;
}

interface FooterProps {
  year: number;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

const Body: React.FC<BodyProps> = ({ content }) => {
  return <div>{content}</div>;
};

const Footer: React.FC<FooterProps> = ({ year }) => {
  return <footer>&copy; {year}</footer>;
};

interface CompoundComponentsType {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
}

type CompoundComponentType = React.FC<CompoundComponentsProps> & CompoundComponentsType;

const CompoundComponents: CompoundComponentType = ({ children }) => {
  return <div>{children}</div>;
};

CompoundComponents.Header = Header;
CompoundComponents.Body = Body;
CompoundComponents.Footer = Footer;

const CompoundComponentApp: React.FC = () => {
  return (
    <CompoundComponents>
      <CompoundComponents.Header title="Welcome to My App" />
      <CompoundComponents.Body content="This is the main content of the app." />
      <CompoundComponents.Footer year={2023} />
    </CompoundComponents>
  );
};

export default CompoundComponentApp;
