import React from 'react'

const banner = () => {
  return (
    <div>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
   
    <div className="max-w-md">

     


      <h1 className="mb-5 text-5xl text-white font-extrabold">Hello there</h1>
      <p className="mb-5 text-white font-bold">
        Welcome to our website! We are thrilled to have you here. Explore our
        content, discover new features, and enjoy your stay. If you have any
        questions or need assistance, feel free to reach out to us. Happy browsing! 
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>  <div className='justify-self-center gap-7'></div>

  
     <div> <img
            className="mask mask-squircle"
            src="1.png" /></div>
  </div>
</div>
        </div>

    
  )
}

export default banner