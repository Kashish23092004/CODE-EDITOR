import React from 'react'

const Header = ({ srcCode }) => {
  return (
    <div>
      <div className='bg-white p-4 shadow mt-4  border border-black rounded-md'>
        <h2 className='text-lg font-semibold mb-2 text-black'>Result</h2>
        <iframe
          className='w-full h-60 border border-black rounded-md'
          srcDoc={srcCode}
          title='output'
          sandbox='allow-scripts'
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  )
}

export default Header
