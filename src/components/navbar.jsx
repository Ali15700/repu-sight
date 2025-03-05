const Navbar = () => {
    return (
      <header className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center'>
          {/* <img src='/logo.svg' alt='Logo' className='h-8' /> */}
          <span className='ml-2 text-xl font-bold'>RepuSight.ai</span>
        </div>
  
        <nav className='hidden md:flex items-center space-x-6'>
          <a href='#pricing' className='text-gray-600 hover:text-gray-900'>
            Pricing
          </a>
          <div className='relative group'>
            <button className='text-gray-600 hover:text-gray-900 flex items-center'>
              Use Cases
              <svg
                className='w-4 h-4 ml-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </div>
          <a href='#login' className='text-gray-600 hover:text-gray-900'>
            Login
          </a>
          <a
            href='#signup'
            className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
          >
            Sign Up
          </a>
        </nav>
      </header>
    );
  };
  
  export default Navbar;