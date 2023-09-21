import {StyledFooter} from './style';
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import {BiLogoGmail} from 'react-icons/bi';
import {AiFillGithub} from 'react-icons/ai';

export const Footer = ()=>{


    return(

        <StyledFooter>
                <div className='box1'>
                        <img src='https://media.licdn.com/dms/image/D4D35AQFctHVdxPO54Q/profile-framedphoto-shrink_200_200/0/1673880619583?e=1695924000&v=beta&t=p_65UKmvrUPUI8zPKa1C_0vrWp7ypxeGdio2sj3eMD4'/>
                        <h3>Matheus Ferriera, Desenvolvedor Web Full-Stack</h3>
                </div>

                <ul className='box2'>
                    <li>
                    <a href="https://www.linkedin.com/in/matheusferreira33/" target="_blank">
                            <BsLinkedin />
                    </a>
                 
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/?view=cm&to=matheus.fsilva33@gmail.com" target="_blank">
                            <BiLogoGmail/>
                        </a>
                 
                    </li>
                    <li>
                        <a href="https://github.com/MatheusFerreira33" target="_blank">
                            <AiFillGithub/>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=11932211306&text=Olá, vim do seu site onMovie" target="_blank">
                            <BsWhatsapp/>
                        </a>
                    </li>

                </ul>
        </StyledFooter>
        
    )
}