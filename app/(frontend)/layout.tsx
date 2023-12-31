import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
  
      <Header/>
      <main className="flex-1">{children}</main>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}