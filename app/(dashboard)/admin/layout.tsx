import DasboardHeader from "../_components/DasboardHeader"
import Sidebar from "../_components/Sidebar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">
        <section className="container-fluid d-flex">
          <Sidebar/>
          <div className="col-md-10" style={{minWidth:(100%-200),marginLeft:"200px"}}>
            <DasboardHeader/>
            <div className="p-2">
            {children}
            </div>
          </div>
        </section>
        </main>
        
    </div>
  )
}