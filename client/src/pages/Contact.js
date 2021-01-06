import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-container-div">
                    <p className="contact-header">Dane teleadresowe</p>
                    <span className="span-line"></span>
                    <ul>
                        <li className="DOM-name">Schronisko dla Bezdomnych Zwierząt DOM w Zielonym</li>
                        <li><i className="fa fa-map-marker"></i>Zielone 100, 50-100 Białe</li>
                        <li><i className="fa fa-institution"></i>KRS: 010101010101</li>
                        <li><i className="fa fa-phone"></i>Anna: 123 456 789</li>
                        <li><i className="fa fa-phone"></i>Janek: 987 654 321</li>
                        <li><i className="fa fa-envelope"></i>schronisko_dom@gmail.com</li>
                    </ul>
                </div>
                <div className="contact-container-div">
                    <p className="contact-header">Godziny otwarcia</p>
                    <span className="span-line"></span>
                    <div className="open-hours">
                        <div>
                            <p>Poniedziałek - Piątek</p>
                            <p>10 - 19.30</p>
                        </div>
                        <div>
                            <p>Sobota - Niedziela</p>
                            <p>10 - 14.30</p>
                        </div>
                        <div>
                            <p>Święta</p>
                            <p>nieczynne</p>
                        </div>
                    </div>
                </div>
                <div className="contact-container-div">
                    <p className="contact-header">Wsparcie</p>
                    <span className="span-line"></span>
                    <ul>
                        <li>Schronisko można wsprzeć wpłacając pieniądze na poniższe konto:</li>
                        <li>01 0101 0101 0101 0101 0101 0101</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Contact;