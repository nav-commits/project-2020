import React,{useState} from 'react';
import '../App.scss';
import emailjs from 'emailjs-com';

 const Contact = () => { 
   
 const {REACT_APP_SERVERID,REACT_APP_TEMPLATEID,REACT_APP_APIKEY} = process.env;
 const[name,setname]=useState<string>('')
 const[message,setmessage]= useState<any>(null)

 const sendEmail = (event:any) => {
    event.preventDefault();
    emailjs.sendForm(`${REACT_APP_SERVERID}`, `${REACT_APP_TEMPLATEID}`, event.target, `${REACT_APP_APIKEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset()
      setmessage(name)
      setTimeout(()=>{ setmessage(false) }, 3000);
  }

  return (
<div className="Contact-section" id="Contact">
     <div>
        <h1 className="contact">Contact <span className="me">Me</span> </h1>
     </div>
    
     <form className="form-sub" onSubmit={sendEmail}> 
            <input type="text" required name="name" placeholder="Name" onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => setname(ev.target.value)}/>
            <input className="email" required type="email" name="email" placeholder="Email"/>
            <input type="text" required name="subject" placeholder="Subject"/>
            <textarea required placeholder="Write something here" name="message"></textarea>
            <button className="but">Send</button>
     </form>
     {message && <p className="namer">Thanks for submitting, <span style={{color:"orange"}}>{message}!</span></p>}
</div>
  );
}

export default Contact;
