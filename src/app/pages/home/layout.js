import Header from "@/app/components/header";



export default function RootLayout({ children }) {
  return (
    <>
        <nav>
          <Header/>
        </nav>
        {children}
    </>
  );
}
