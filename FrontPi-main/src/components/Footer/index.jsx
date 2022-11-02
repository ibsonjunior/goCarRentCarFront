import './style.css'
import Facebook from '../../assets/facebook.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer_copyrights">©2022 GoCar</div>
            <div className="footer_social_media">
                <div><img src={Facebook} alt="" /></div>
                <div><img src={LinkedIn} alt="" /></div>
                <div><img src={Twitter} alt="" /></div>
                <div><img src={Instagram} alt="" /></div>
                
            </div>
        </div>
        </>
    )
}

export default Footer