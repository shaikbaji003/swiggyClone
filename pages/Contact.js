import React from 'react'
import "/Common.css";


const Contact = () => {
return (
    <>
    {/* <Navbar/> */}
    <div className="section-contact">
			<div className="container">
				<h1>Contact the team!</h1>
				<p>Fill out the form below to get in touch with one of our team members. We will try to get back to you within 48 hours. If we do not reply within that time please feel free to use the form again.</p>

				<form>
					<div className="form-group">
						<label for="firstname">First name*</label>
						<input 
							type="text" 
							name="firstname" 
							id="firstname" 
							required 
							className="form-element"
							placeholder="Enter your first name...." />
					</div>
					<div className="form-group">
						<label for="lastname">Last name*</label>
						<input type="text" name="lastname" id="lastname" required className="form-element" placeholder="Enter your last name...." />
					</div>
					<div className="form-group">
						<label for="email">Email address*</label>
						<input type="email" name="email" id="email" required className="form-element" placeholder="Enter your email...." />
					</div>
					<div className="form-group">
						<label for="company">Contact Number</label>
						<input type="number" name="company" id="company" className="form-element" placeholder="Enter your contact number...." />
					</div>
					<div className="form-group full">
						<label for="message">What are you looking for?</label>
						<textarea name="message" id="message" className="form-element" placeholder="Type...."></textarea>
					</div>
					<div className="submit-group">
						<button className="btn-hovercolor-6" >SEND MESSAGE</button>
					</div>
				</form>
			</div>
		</div>
</>
)
}
export default Contact;