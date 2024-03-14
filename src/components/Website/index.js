import './index.css'

import ReactPlayer from 'react-player'

const Website = () => {
  const MobileView = () => (
    <div className="mobileView">
      <div className="headingPart">
        <h1 className="mobileHeading">Mobishaala</h1>
        <p className="mobilePara">
          Create your <span className="mobileSpan"> Digital Classroom </span> in
          5 mins for
          <span className="mobileSpan"> Free</span> & connect to 1+ Million
          Students.
        </p>
      </div>

      <div className="PlayerCon">
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jg5d59ligW4"
            controls
          />
        </div>

        <button type="button" className="mobileBtn">
          Buy
        </button>
      </div>

      <div className="mobileCon">
        <p className="mobilePara1">Institue/Teacher</p>
        <button type="button" className="mobileBtn1">
          Get Started
        </button>
      </div>

      <div className="mobileCon">
        <p className="mobilePara1">Student</p>
        <button type="button" className="mobileBtn1">
          Download App
        </button>
      </div>

      <div className="mobileTalkToUs">
        <img
          src="https://pluspng.com/img-png/whatsapp-png-wazapp-logo-whats-whatsapp-logo-whatsapp-icon-2050.png"
          alt="whats"
          className="mobileIcon"
        />
        <p className="whatsMsg">Talk to Us</p>
      </div>

      <div className="mobileDescription">
        <h1 className="desHead">Mobishaala</h1>

        <div className="detailsCon">
          <h1 className="detailsHead">Vision</h1>
          <p className="detailsPar">
            Empower Institutions & Teachers with state of the art digital
            classroom Technology.
          </p>
        </div>

        <div className="detailsCon">
          <h1 className="detailsHead">Address</h1>
          <p className="detailsPar">
            <span className="detailsAddress">Registered Office : </span> 804,
            5th Cross, 9th main 4th Block Koramangala,Bangalore,Karnataka 560034
          </p>

          <p className="detailsPar">
            <span className="detailsAddress">Corporate Office : </span>
            293,Westend Marg,near Saket,Saidulajab,Saket,New Delhi,110030
          </p>
        </div>

        <div className="detailsCon">
          <h1 className="detailsHead">Quick Links</h1>
          <p className="detailsPar">Blog</p>
          <p className="detailsPar">Android App</p>
          <p className="detailsPar">IOS App</p>
        </div>
      </div>
    </div>
  )

  const Desktop = () => (
    <div className="desktopView">
      <div className="detailsPart">
        <h1 className="mobileHeading">Mobishaala</h1>
        <p className="mobilePara">
          Create your <span className="mobileSpan"> Digital Classroom </span> in
          5 mins for
          <span className="mobileSpan"> Free</span> & connect to 1+ Million
          Students.
        </p>

        <ul className="deskFeatures">
          <li className="listItem">No technical knowledge required.</li>
          <li className="listItem">
            Quickly setup live class,tests,notes,ebooks and more.
          </li>
          <li className="listItem">
            Reach out to millions of students anywhere,anytime.
          </li>
        </ul>

        <div className="mobileCon">
          <p className="mobilePara1">Institue/Teacher</p>
          <button type="button" className="mobileBtn1">
            Get Started
          </button>
        </div>

        <div className="mobileCon">
          <p className="mobilePara1">Student</p>
          <button type="button" className="mobileBtn1">
            Download App
          </button>
        </div>

        <div className="mobileTalkToUs">
          <img
            src="https://pluspng.com/img-png/whatsapp-png-wazapp-logo-whats-whatsapp-logo-whatsapp-icon-2050.png"
            alt="whats"
            className="mobileIcon"
          />
          <p className="whatsMsg">Talk to Us</p>
        </div>
      </div>

      <div className="deskPlayer">
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jg5d59ligW4"
            controls
          />
        </div>

        <button type="button" className="mobileBtn1">
          Buy
        </button>
      </div>
    </div>
  )

  return (
    <>
      {MobileView()}
      {Desktop()}
    </>
  )
}

export default Website
