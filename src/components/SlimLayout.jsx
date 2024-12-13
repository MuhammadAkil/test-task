export function SlimLayout({ children }) {
  return (
    <>
      <div className="relative flex min-h-full py-20  shrink-0 justify-center md:px-12 lg:px-0">
        <div className="relative z-10 rounded-lg flex flex-1 flex-col  px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <main className="mx-auto w-full  max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
