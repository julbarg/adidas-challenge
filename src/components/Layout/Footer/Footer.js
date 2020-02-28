import React from 'react';

const Footer = () => {
    const content = [
        'Data settings',
        'Do not sell my personal information',
        'Privacy PolicyTerms and Conditions',
        '© 2020 adidas America Inc.'
    ];

    const renderContent = (content, index) => (
        <div key={index}>
            {content}
        </div>
    );

    return (
        <footer>
            <div className='d-flex justify-content-around w-50 mx-auto'>
                {content.map(renderContent)}
            </div>
        </footer>
    )
}

export default Footer;