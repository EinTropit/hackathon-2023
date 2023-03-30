import React from 'react';

function Nav() {
  return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><img src="assets/img/voluntere.webp" class="w-10 h-10" alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="index.html#services">שירותים</a></li>
                        <li class="nav-item"><a class="nav-link" href="#services">התחבר</a></li>
                        <li class="nav-item"><a class="nav-link" href="form.html">טופס קליטת ילדים</a></li>
                        <li class="nav-item"><a class="nav-link" href="items.html">טופס דרישת חפצים</a></li>
                        <li class="nav-item"><a class="nav-link" href="showcase.html">תרמו חפצים</a></li>
                        <li class="nav-item"><a class="nav-link" href="volunteer.html">תאמו התנדבות</a></li>
                        <li class="nav-item"><a class="nav-link" href="profile.html">פרופיל מתנדב</a></li>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <li class="nav-item"><a class="nav-link" href="index.html#team">הצוות שלנו</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#contact">צור קשר</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

function Mast(){
    return (
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">ברוכים הבאים לVolu!</div>
                <div class="masthead-heading text-uppercase text-dark">עזרו לנו לשפר את חייהם של ילדים רבים</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">ספר לי עוד</a>
            </div>
        </header>
    );
}
function Services(){
    return (
<section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">הציעו את עזרתכם</h2>
                    <h3 class="section-subheading text-muted">יחד נשפר את איכות חייהם של הילדים.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <a href="VolunteerRegistration.html">
                              <i class="btn btn-dark btn-social mx-2"></i>
                              <i class="fas fa-circle fa-stack-2x text-primary"></i>
                              <i class="fas fa-hands-helping fa-stack-1x fa-inverse"></i>                            
                            </a>
                          </span>
                          <h4 class="my-3">התנדבות</h4>
                        <p class="text-muted">עזרו לאחיות, נגנו בגיטרה, או פשוט תדברו איתם. בVolu תוכלו לראות מה הילדים באמת צריכים ולתאם את ההתנדבות.</p>
                    </div>
                    <div class="col-md-4"> 
                        <span class="fa-stack fa-4x">
                            <a href="items.html">
                                <i class="btn btn-dark btn-social mx-2"></i>
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>                            
                            </a>
                        </span>
                        <h4 class="my-3" >תרמו חפצים</h4>
                        <p class="text-muted">בכל בית יש חפצים שלא משתמשים בהם. בVolu תוכלו לראות מה הילדים צריכים ולהציע מה שתוכלו.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <a href="form.html">
                              <i class="btn btn-dark btn-social mx-2"></i>
                              <i class="fas fa-circle fa-stack-2x text-primary"></i>
                              <i class="fas fa-chart-bar fa-stack-1x fa-inverse"></i>
                            </a>
                          </span>
                          <h4 class="my-3">גרף התקדמות בתרומות</h4>
                        <p class="text-muted">בדקו מה עוד נותר לתרום לילדים</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

function Team(){
    return (
    <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">הצוות המדהים שלנו</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/elad.jpg" alt="..." />
                            <h4>Elad Hillel</h4>
                            <p class="text-muted">Lead Designer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/dana.jpg" alt="..." />
                            <h4>Dana Gorelik</h4>
                            <p class="text-muted">Lead Marketer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/amir.jpg" alt="..." />
                            <h4>Amir Livny</h4>
                            <p class="text-muted">Lead Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/tony.jpg" alt="..." />
                            <h4>Tony Slavin</h4>
                            <p class="text-muted">Lead Cannon</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/gilad.jpg" alt="..." />
                            <h4>Gilad El-dor</h4>
                            <p class="text-muted">Leads United</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted"></p></div>
                </div>
            </div>
        </section>
        );

}

function Contact(){
    return (
        <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Contact Us</h2>
                <h3 class="section-subheading text-muted"></h3>
            </div>
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            
                            <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <div class="form-group">
                            
                            <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                            <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <div class="form-group mb-md-0">
                            
                            <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                            
                            <textarea class="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                            <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                    </div>
                </div>
                
                <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center text-white mb-3">
                        <div class="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
               
                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
               
                <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
            </form>
        </div>
    </section>

    );
}


function Footer(){
    return (
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
