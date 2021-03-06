import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const Footer = () => (
    <footer>
        <p>
            <a 
                href="https://github.com/mattrudin" 
                target="_blank" 
                rel="noopener noreferrer">
                    <FontAwesomeIcon 
                        icon={faGithub}
                        size='1x' /> 
                    MattRudin
            </a>
            , MADE IN BASLE / LUCERNE
        </p>
    </footer>
)

export default Footer
