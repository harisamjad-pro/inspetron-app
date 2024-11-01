import React from 'react'

const Footer = () => {
    return (
        <footer>
            <nav>
                <p className='text-center'>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
            </nav>
        </footer>
    )
}

export default Footer