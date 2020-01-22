import React from 'react';


function Footer() {
    const dates = new Date();
    const years = dates.getFullYear();
    return <footer>
        <p>CopyRitht&copy;Mezoo {years}</p>
    </footer>
}

export default Footer;