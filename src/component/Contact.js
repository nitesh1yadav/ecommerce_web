import React from 'react'


const Contact = () => {
  return (
    <section className='sec-pad contact_us'>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-lg-12 text-center">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.306516442926!2d75.82483439984225!3d26.85776556132434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66bfb75612f%3A0xec40a1c1c40b8c0e!2sOKAY%20PLUS%20SPACES%2C%20Bikaner%20-%20Agra%20Rd%2C%20Jhalana%20Gram%2C%20Malviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1700742709811!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form action="">
              <div class="mb-3">
                <label for="Enter Email" class="form-label">Email address</label>
                <input type="email" class="form-control" name="name" id="exampleFormControlInput1" placeholder="Enter Email Address" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" name="textarea"class="form-label">Example textarea</label>
                <textarea class="form-control" placeholder="Enter Your Message" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn ">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact