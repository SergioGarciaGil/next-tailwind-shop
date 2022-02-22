import Header from "@components/Header";
import Nav from "@common/Nav";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main className="py-6 mx-auto max-w-7xl sm:px-6">{children}</main>
      </div>
    </>
  );
}
