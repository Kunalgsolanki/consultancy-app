import React from 'react'

const Services = () => {
  return (
    <div className="py-16">
         <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#23225a] to-[#1100ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        
  <div className="container mx-auto px-4">
  
        
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white-800">Our Services</h2>
      <p className="text-white-600 mt-4">
        Explore the services we provide to help your business grow and succeed.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Single Service Card */}
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-center justify-center h-16 w-16 bg-blue-500 text-white rounded-full mx-auto mb-6">
          {/* Icon Placeholder */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h6"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Web Development
        </h3>
        <p className="text-gray-600 text-center">
          Build modern, responsive websites and web applications tailored to your needs.
        </p>
      </div>

      {/* Repeat Service Card */}
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-center justify-center h-16 w-16 bg-green-500 text-white rounded-full mx-auto mb-6">
          {/* Icon Placeholder */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h6"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Mobile App Development
        </h3>
        <p className="text-gray-600 text-center">
          Design and develop feature-rich mobile applications for iOS and Android.
        </p>
      </div>

      {/* Another Service Card */}
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-center justify-center h-16 w-16 bg-yellow-500 text-white rounded-full mx-auto mb-6">
          {/* Icon Placeholder */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h6"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Digital Marketing
        </h3>
        <p className="text-gray-600 text-center">
          Boost your online presence with our tailored digital marketing strategies.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Services