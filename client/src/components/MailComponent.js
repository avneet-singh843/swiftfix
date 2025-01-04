function MailComponent() {
  return (
    <>
      <section id="contact-section">
        <h1
          className="contact-primary center"
          style={{ fontSize: "2.5rem", fontWeight: 500 }}
        >
          Mail Us
        </h1>
        <div id="contact-box">
          <form action="backend.php">
            <div className="contact-form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name..."
              ></input>
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email..."
              ></input>
            </div>
            <div className="contact-form-group">
              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="text"
                name="phone"
                id="phone-number"
                placeholder="Enter Your Phone Number..."
              ></input>
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message..."
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default MailComponent;
