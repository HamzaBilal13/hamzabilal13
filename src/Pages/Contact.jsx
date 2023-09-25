import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-auto bg-HeroBg">
      <div className="md:px-12 md:py-12">
        <div className="md:flex md:justify-center md:items-center px-10 md:px-[20px] lg:px-[100px] md:py-[120px] md:grid-cols-2 md:space-x-10">
          <div className="w-[100%] text-center md:py-[50px]">
            <div className="grid grid-rows-2">
              <h1 className="text-TextHeading text-3xl font-bold">
                Your Feedback
              </h1>
              <h1 className="text-TextHeading text-3xl font-bold">
                help us imporve
              </h1>
            </div>
            <div className="grid grid-rows-3 mt-3">
              <h4 className="text-NormalText">
                We are here to help you and we'd
              </h4>
              <h4 className="text-NormalText">
                love to connect with you.
              </h4>
              <h4 className="text-NormalText">
                We'll get back in 24h
              </h4>
            </div>

            <div className="grid grid-rows-3 bg-white border-PrimaryYellow border shadow-md rounded-lg px-5 py-5 mt-10">
              <h5 className="text-NormalText font-bold">
                Contribute to our Mission
              </h5>
            </div>

          </div>

          <div className="w-[100%] bg-white md:py-10 md:px-[20px] shadow-md rounded-lg my-4">
            <h1 className="p-5 text-3xl font-medium">Contact With Me</h1>
            <form className="p-5">
              <div className="grid grid-cols-1">
                <div>
                  <label className="1xl color-[#616161]">Name</label>

                </div>
                <div>
                  <input placeholder="Enter your name" type="text" className="bg-[#efefef] border-1-[#E1E1DF] rounded-md w-[100%] p-4" required />
                </div>
              </div>
              
              <div className="mt-4">
                <div>
                  <label className="1xl color-[#616161]" placeholder='email'>Email</label>

                </div>
                <div>
                  <input placeholder="Enter your email" type="text" className="bg-[#efefef] border-1-[#E1E1DF] rounded-md py-4 px-4 w-[100%]" required />
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <label className="1xl color-[#616161]">Message</label>

                </div>
                <div>
                  <textarea placeholder="Your Message"type="text" className="bg-[#efefef] border-1-[#E1E1DF] rounded-md px-4 py-4 h-32 w-[100%]" required />
                </div>
              </div>


              <div className="mt-4">
                <button className="bg-[#FAFF02] font-semibold py-3 rounded-md w-[100%]">
                  Submit
                </button>

              </div>



       

            </form>
          </div>

        </div>



      </div>
    </div>


  )
}

export default Contact
