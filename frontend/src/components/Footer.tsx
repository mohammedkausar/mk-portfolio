const Footer = ({ footerData }: any) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-400 py-6">
      <div className="px-4 text-center text-sm  app-container">
        <p>
          {footerData?.copyrightSymbol} {year} · {footerData?.text}{" "}
          <a className="font-medium" href="/">
            {footerData.author}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
