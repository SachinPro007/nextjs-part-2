"use client"

function ServicesList({children}) {
  
  return (
    <div>
      <h1 className="my-8 text-2xl">Services List</h1>

      <div>
        {children}
      </div>
    </div>
  );
}

export default ServicesList;
