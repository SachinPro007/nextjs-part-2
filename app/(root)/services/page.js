// import Header from '@/components/Header'
import ServiceItem from '@/components/ServiceItem'
import ServicesList from '@/components/ServiesList'
import React from 'react'

function ServicesPage() {
  const serviceItems = [
    "Web Development",
    "App Development",
    "Web Design / Ui",
    "Content Writting",
    "Seo Marketing",
  ];
  return (
    <div className="min-h-screen p-8">
      {/* <Header /> */}
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className='text-3xl'>This is Services Page</h1>

        <ServicesList>
          {serviceItems.map((item) => (
            <ServiceItem key={item} item={item} />
          ))}
        </ServicesList>
      </div>
    </div>
  )
}

export default ServicesPage