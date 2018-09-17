import React, {Component} from 'react';
import styles from './Contact.sass';
import PrintText from '../../_utils/PrintText';
import Social from '../shared/Social';
import stylesSocial from './elements/Social/Social.sass';

class Contact extends Component {
    state = {
        headerText: "Napisz do mnie!",
        contentText: "Postaram się odpowiedzieć na każdą wiadomosć możliwie jak najszybciej i nie dłużej niż do 48 godzin.",
        footerText: "Jeśli z jakiegoś powodu wydaje Ci się, że umknęła mi Twoja wiadomość, wyślij ją jeszcze raz na adres email podany poniżej.",
        emailText: "mateusz.wodnik@gmail.com",
        printedHeader: false,
        printedContent: false,
    }
    render() {
        const {headerText, contentText, footerText, emailText, printedHeader, printedContent} = this.state;
        return(
            <article id="contact" className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.info}>
                    {/* <h1 className={styles.title}><PrintText text={headerText} interval={100} randomize={100} callback={() => this.setState({printedHeader: true})} /></h1> */}
                    {/* {printedHeader && <p className={styles.text}><PrintText text={contentText} interval={10} randomize={10} callback={() => this.setState({printedContent: true})} /></p>} */}
                    <h1 className={styles.title}>{headerText}</h1>
                    <p className={styles.text}>{contentText}</p>
                    {printedHeader && <Social styles={stylesSocial}/>}
                    {/* {printedContent &&  */}
                        <footer className={styles.direct}>
                            <p><small>{footerText}</small> Bezpośredni email: <a href={`mailto:${emailText}`} className={styles.email}>{emailText}</a></p>
                        </footer>
                    {/* } */}
                </div>
                <form action="https://formspree.io/mateusz.wodnik@gmail.com" method="POST" className={styles.form}>
                    <input type="text" name="name" placeholder="Imię i nazwisko"/>
                    <input type="email" name="_replyto" placeholder="twój-email@mail.com"/>
                    <input type="text" name="way" placeholder="Jak się o mnie dowiedziałeś?"/>
                    <textarea name="message" cols="30" rows="10" placeholder="Wiadomość"></textarea>
                    <button type="submit" className={styles.submit}>Wyślij wiadomość</button>
                </form>
            </div>
            </article>
        );
    }
} 


export default Contact;