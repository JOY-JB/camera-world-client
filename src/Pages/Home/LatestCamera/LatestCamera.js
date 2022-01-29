import React from 'react';

const LatestCamera = () => {
    return (
        // this is latest camera section
        <section className="text-gray-600 body-font pt-16">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                Latest Camera
            </h2>
            <div className="container px-5 py-14 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">best affordable all-rounder – new Sony A7 III</h1>
                        <div className="leading-relaxed">It might not have the blinding speed of Sony’s. Sony A7 III grabs many of the best bits from these pricier models and delivers them in a more affordable package.</div>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">24.2MP</h2>
                        <p className="leading-relaxed">Megapixels</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">922k</h2>
                        <p className="leading-relaxed">Screen</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">10fps</h2>
                        <p className="leading-relaxed">Continuous</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">4K</h2>
                        <p className="leading-relaxed">Resolution</p>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img className="object-cover object-center w-full h-full" src="https://cdn.mos.cms.futurecdn.net/6H3uSVQqyWsSpmjqHqUiWL-970-80.jpg" alt="stats" />
                </div>
            </div>
        </section>
    );
};

export default LatestCamera;