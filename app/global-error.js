"use client"
function GlobaleError() {

  return <html>
    <body>
      <div className="flex flex-col gap-6 justify-center items-center h-screen">
        <p>Something went wrong on global root</p>
        <button onClick={() => {
          window.location.reload()
        }}>Try again</button>
      </div>
    </body>
  </html>
}

export default GlobaleError