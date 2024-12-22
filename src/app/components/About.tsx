import React from 'react'

const About = () => {
  return (
  <React.Fragment>
                                                    <section className="py-24 relative ">
                                                    <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#23225a] to-[#1100ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div
                    className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img className=" rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="about Us image" />
                    </div>
                    <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png"
                        alt="about Us image" />
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                className="text-white-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Empowering Each Other to Succeed</h2>
                            <p className="text-white-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Every project we've undertaken has been a collaborative effort, where every person
                                involved has left their mark. Together, we've not only constructed buildings but also
                                built enduring connections that define our success story.</p>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div className="flex-col justify-start items-start inline-flex">
                                <h3 className="text-white-900 text-4xl font-bold font-manrope leading-normal">33+</h3>
                                <h6 className="text-white-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-white-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
                                <h6 className="text-white-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-white-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
                                <h6 className="text-white-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                            </div>
                        </div>
                    </div>
                    <button
                        className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
                                            
  </React.Fragment>
  )
}

export default About