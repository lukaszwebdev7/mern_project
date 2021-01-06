import React, { useEffect, useState } from 'react';
import '../styles/Cooperation.css';

const Cooperation = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messageTheme, setMessageTheme] = useState('');
    const [messageContent, setMessageContent] = useState('');

    const handleMessageAdd = () => {
        fetch('api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, messageTheme, messageContent }),
        })
            .then((r) => r.json())
            .then(() => {
                alert("Wiadomość została wysłana.");
                window.location.reload();
            })
    }


    return (
        <div className="cooperation-container">
            <div className="cooperation-text">
                DOM to strona przeznaczona dla miłośników psów z myślą o zapewnieniu jak najlepszej opieki naszym podopiecznym i przede wszystkim znalezieniu im prawdziwego, ciepłego domu. Tworzona jest przez pracowników schroniska i trenerów. Czytelnicy bloga znajdą w nim informacje o eventach w schronisku, akcjach promocyjnych, porady behawioralne, relacje z psich imprez, ciekawe pomysły na aktywne spędzanie czasu z psem i wiele więcej.
            </div>
            <div className="cooperation-block">
                <div className="cooperation-invit">
                    Zapraszamy do kontaktu
                </div>
                <div>
                    <div className="form-container">
                        <i className="fa fa-user-circle"></i>
                        <textarea style={{ border: "none" }} rows="1" cols="60"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Imię"
                        />
                    </div>
                    <div className="form-container" >
                        <i className="fa fa-envelope"></i>
                        <textarea style={{ border: "none" }} rows="1" cols="60"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="form-container">
                        <i className="fa fa-pencil-square"></i>
                        <textarea style={{ border: "none" }} rows="2" cols="60"
                            type="text"
                            value={messageTheme}
                            onChange={(e) => setMessageTheme(e.target.value)}
                            placeholder="Temat wiadomości"
                        />
                    </div>
                    <div className="form-container">
                        <i className="fa fa-pencil-square"></i>
                        <textarea style={{ border: "none" }} rows="10" cols="60"
                            type="text-area"
                            value={messageContent}
                            onChange={(e) => setMessageContent(e.target.value)}
                            placeholder="Treść wiadomości"
                        />
                    </div>
                </div>
                <div className="button-container">
                    <div className="trick-margin"></div>
                    <button className="cooperation-button" onClick={handleMessageAdd}>Wyślij</button>
                </div>
            </div>
        </div>
    )
}

export default Cooperation;