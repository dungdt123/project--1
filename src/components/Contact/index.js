import React from 'react'

const Contact = () => {
    return (
        <div className="md:container md:mx-auto px-4">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 text-3xl">Contact Us</h3>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3  rounded-sm">
                                        <label htmlFor="first_name" className="font-semibold">First name</label>
                                        <input type="text" id="first_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-4 border-light-blue-500 border-opacity-25 rounded-md" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3  rounded-sm">
                                        <label htmlFor="last_name" className="font-semibold">Last name</label>
                                        <input type="text" id="last_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-4 border-light-blue-500 border-opacity-25 rounded-md" />
                                      </div>
                                    <div className="col-span-6 sm:col-span-4  rounded-sm">
                                        <label htmlFor="email_address" className="font-semibold">Email address</label>
                                        <input type="text" id="email_address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-4 border-light-blue-500 border-opacity-25 rounded-md" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3  rounded-sm">
                                        <label htmlFor="country" className="font-semibold">Country / Region</label>
                                        <input type="text" id="street_address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-4 border-light-blue-500 border-opacity-25 rounded-md" />
                                    </div>
                                    <div className="col-span-6  rounded-sm">
                                        <label htmlFor="street_address" className="font-semibold ">City</label>
                                        <input type="text" id="street_address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-4 border-light-blue-500 border-opacity-25 rounded-md " />
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Submit 
            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default Contact
