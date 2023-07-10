import CookieBar from "../header/CookieConsent.jsx";

export default function Footer() {
    return (
        <footer className="footer">
            <div className='container-footer'>
                <div className="instagram">
                    <a href="https://instagram.com/sabrinapenido?igshid=MjAxZDBhZDhlNA==" target="_blank">
                        <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='facebook'>
                    <a href="https://www.facebook.com/profile.php?id=100009807159698&mibextid=ZbWKwL" target="_blank"><i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="youtube">
                    <a href="https://youtube.com/" target="_blank"><i className="fa fa-youtube fa-3x" aria-hidden="true"></i></a>
                </div>
                <div className="footerFooter">
                    <p>2023 Direitos reservados LRE</p>
                </div>
            </div>
        </footer>
    )
}