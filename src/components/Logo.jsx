
import logo from '../assets/logo-sc-blanc.png';
import './Logo.css';

export default function Logo({ big }) {
    return (
        <h1 className={`logo ${big ? 'big' : ''}`}>
            <img className="logo-img" src={logo} alt="Sticky<code>" />
        </h1>
    );
}
