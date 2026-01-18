import React from 'react'

const Widget = () => {
  return (
    <>
      <div className="hidden lg:block w-80 xl:w-96 fixed right-0 top-16 h-screen overflow-y-auto bg-white border-l p-4">
        
        {/* Sponsored Section */}
        <div className="mb-6">
          <h2 className="text-gray-500 font-semibold mb-3">Sponsored</h2>
          <div className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <h3 className="text-sm text-gray-700">Ad content here</h3>
          </div>
        </div>

        {/* Birthdays Section */}
        <div className="mb-6">
          <h2 className="text-gray-500 font-semibold mb-3">Birthdays</h2>
          <div className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <h3 className="text-sm text-gray-700">Today's birthdays</h3>
          </div>
        </div>

        {/* Facebook Page Plugin - Live Iframe */}
        <div className="mb-6">
          <h2 className="text-gray-500 font-semibold mb-3">Facebook Page</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="500"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Page Plugin"
            ></iframe>
          </div>
        </div>

        {/* Contacts Section */}
        <div className="mb-6">
          <h2 className="text-gray-500 font-semibold mb-3">Contacts</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-sm text-gray-700">Contact Name</h3>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <h3 className="text-sm text-gray-700">Contact Name</h3>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <h3 className="text-sm text-gray-700">Contact Name</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Widget