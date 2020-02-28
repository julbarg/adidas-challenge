/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';

const Header = () => {
    const links = ['MEN', 'WOMEN', 'KIDS', 'SPORTS', 'BRANDS', 'RELEASE DATES'];
    const urlLogo = 'https://www.adidas.com/glass/react/3f4d528/assets/img/icon-adidas-logo.svg';

    const renderLink = (link, index) => {
        const classes = index < 3 ? 'nav-link font-weight-bold' : 'nav-link';

        return (
            <a className={classes} key={index} href='#'>{link}</a>
        );
    }

    const renderForm = () => (
        <form className='form-inline my-lg-0'>
            <input
                className='form-control mr-sm-2'
                type='text'
                placeholder='Search'
            />
        </form>
    );

    return (
        <React.Fragment>
            <div className='Header d-flex align-items-center'>
                {/* <nav className='navbar navbar-expand-lg navbar-light bg-light w-100'>
                    <img
                        className='Header_Logo'
                        src={urlLogo} alt='logo'
                    />
                    <div className='navbar-collapse'>
                        <nav className='navbar-nav mx-auto'>
                            {links.map(renderLink)}
                        </nav>
                        {renderForm()}
                    </div>
                </nav> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                    <img
                        className='Header_Logo'
                        src={urlLogo} alt='logo'
                    />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <nav className='navbar-nav mx-auto'>
                            {links.map(renderLink)}
                        </nav>
                        {renderForm()}
                    </div>
                </nav>
            </div>
            <div className='d-flex justify-content-center Header_Messages'>
                <div className='mx-2 Header_Message'>
                    FREE SHIPPING OVER $49 AND FREE RETURNS
                    </div>
                <div className='mx-2 Header_Message'>
                    JOIN THE ADIDAS CREATORS CLUB
                    </div>
            </div>
        </React.Fragment>
    )
};

export default Header;