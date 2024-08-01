import React from 'react'
import submitForm from './submitForm'
function ContactForm(props) {
    return (
        <div>
            <form
                // Ignore the onSubmit prop, it's used by GFE to
                // intercept the form submit event to check your solution.
                onSubmit={submitForm}
                method="post"
                action="https://www.greatfrontend.com/api/questions/contact-form"
            >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message" />
                <button name="submit" type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactForm
