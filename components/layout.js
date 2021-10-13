import PageTransition from "./utils/PageTransitions/TopDown";
import SmartOutline from "./utils/SmartOutline";
import Header from "./Header";

function Layout({ children, header, absolute }) {
  return (
    <>
      <SmartOutline />
      <PageTransition />
      <Header items={header} absolute={absolute} />

      <main>{children}</main>
    </>
  );
}

export default Layout;
