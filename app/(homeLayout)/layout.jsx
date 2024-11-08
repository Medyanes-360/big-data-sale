import Footer from "@/components/layout/footer";
import Header from "@/components/layout/navigation-header";

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
      {children}

      <Footer />
    </>
  );
}
