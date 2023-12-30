export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">
        <section className="container-fluid d-flex">
          <div className="col-md-10">
          {children}
          </div>
        </section>
        </main>
        
    </div>
  )
}