import React from 'react';
import classNames from 'classnames';

const FooterContact = ({
    className,
    ...props
}) => {

    const classes = classNames(
        'footer-nav',
        className
    );

    return (
        <nav
            {...props}
            className={classes}
        >
            <ul className="list-reset list-spaced">
                <li>
                    mail <br />
                </li>
                <li>
                    direction <br />
                </li>
            </ul>
        </nav>
    );
}

export default FooterContact;