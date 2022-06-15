import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    let mcontainer = document.getElementById("msg");
    mcontainer.hidden = true;
    let btn = document.getElementById('email-btn');
    btn.innerText = "Sending..."
    console.log(name, email, message)
  let header = {
    'Content-Type': 'application/json',
    "Authorization": "Basic ZWNlbGxAaWl0aTplY2VsbA"
  }
  let url = 'https://api.sheety.co/c0e0b109bd1a08e2e77e370264f55594/ecell/queries';
  let body = {
    query: {
      "name": name,
      "email": email,
      "message": message
    }
  }
  fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(body)
  })
  .then((response) => response.status)
  .then(json => {
    let msg = "";
    if(json == "200"){
      msg = "Glad to hear from You! Message Successfully Send."
    }else{
      msg = "Something went wrong, Please try again...";
      mcontainer.style.backgroundColor = "#EF6D6D";
    }
    let emailcon = document.getElementById("email");
    let msgcon = document.getElementById("message");
    let namecon = document.getElementById("name");
    emailcon.value = "";
    msgcon.value = "";
    namecon.value = "";
    mcontainer.hidden = false;
    mcontainer.innerHTML = msg;
    btn.innerText = "Send";
  });
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                {/* <p>
                  Fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p> */}
              </div>
              <div id='msg' hidden></div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' id="email-btn" className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a target="_blank" href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <a target="_blank" href={props.data ? props.data.linkedin : '/'}>
                  <li>
                    <i className="fa fa-linkedin-square"></i>
                  </li>
                </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='container text-center' id="copyright">
          <p>
            &copy; 2022 <a href="/#home">E-Cell IIT Indore</a> | All Rights Reserved | Developed with ❤ by the <a href="/team"> E-Cell TEAM </a>
          </p>
        </div>
      </div>
    </div>
  )
}
