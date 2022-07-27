import { Send } from "@mui/icons-material"
import "./newsletter.css"

export default function Newsletter(){
    return (
        <div className="newsletter">
            <div className="newsletter-container">
                <h1 className="newsletter-title">Newsletter</h1>
                <div className="newsletter-detail">Get timely updates from your favorite products.</div>
                <div className="newsletter-inputContainer">
                    <input type="text" placeholder="Your Email" className="newsletter-inputEmail" />
                    <button className="newsletter-inputButton">
                        <Send />
                    </button>
                </div>
            </div>
        </div>
    )
}