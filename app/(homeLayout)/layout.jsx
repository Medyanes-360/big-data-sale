import Footer from "@/components/layout/footer";
import Header from "@/components/layout/navigationHeader";
export default function HomeLayout({ children }) {
  // Layout Will be inside this component:
  // return (
  //   <>
  //     <Sidebar />
  //     <Navbar />
  //     {children}
  //     <Footer />
  //   </>
  // );

  return (
    <>
      <Header />
      <main className="pt-32">{children}</main>
      <Footer />
    </>
  );
}
