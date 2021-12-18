import React from 'react';
import contacts from '../../utils/contacts';
function About() {

    return (
        <div>
            <footer id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center bottom-separator">
                            <img src="images/home/under.png" class="img-responsive inline" alt=""></img>
                        </div>
                        <div class="col-md-8 col-sm-8">
                            <div class="testimonial bottom">
                                
                                <div class="media">
                                    <div class="pull-left">
                                        <a href="#"><img src="images/home/profile1.png" alt=""></img></a>
                                    </div>
                                    <div class="media-body">
                                        <blockquote>Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people.</blockquote>
                                        <h3><a href="#">- Thomas J. Watson</a></h3>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="pull-left">
                                        <a href="#"><img src="images/home/profile2.png" alt=""></img></a>
                                    </div>
                                    <div class="media-body">
                                        <blockquote>I think design covers so much more than the aesthetic. Design is fundamentally more. Design is usability. It is Information Architecture. It is Accessibility. This is all design.</blockquote>
                                        <h3><a href="">- Mark Boulton</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="contact-info bottom">
                                <h2>Contacts</h2>
                                <address>
                                    E-mail: <a href={contacts.email} >{contacts.email}</a> <br />
                                    Phone: {contacts.phone} <br />
                                    
                                </address>

                                <h2>Location</h2>
                                <address>
                                Thousand Oaks,<br />
                                   CA, <br />
                                   Your Index, <br />
                                    United States <br />
                                </address>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-12">
                   
                    <div class="col-sm-12">
                        <div class="copyright-text text-center">
                            <p>&copy; By Irina Golubitsky</p>
                        </div>
                    </div>
                </div>
                </div>
            </footer>

        </div>
    );
}
export default About;