import React, { Fragment } from 'react'


const ContactForm = () => {
    return ( 
        <Fragment>
            <div className="form-header pt-2">
                <h2>Contact me:</h2>
            </div>
            <hr/>
            <form className="col-sm-8 offset-sm-2">
                <div class="form-group">
                    <label for="exampleInputEmail1">Your Email address:</label>
                    <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="mail@example.com" required/>
                    <small id="emailHelp" class="form-text text-muted pl-2">(I'll never share your email with anyone else)</small>
                </div>
                <div class="form-group">
                    <label for="input-subject">Subject:</label>
                    <input type="text" class="form-control" id="input-subject" placeholder="Topic you want to talk about..." required/>
                </div>
                <div class="form-group">
                    <label for="input-Textarea">Message:</label>
                    <textarea class="form-control" id="input-textarea" rows="2" placeholder="Enter your message here..." required></textarea>
                </div>
                <button type="submit" class="btn btn-outline-success btn-block">Send</button>
            </form>   
        </Fragment>
     );
}
 
export default ContactForm;