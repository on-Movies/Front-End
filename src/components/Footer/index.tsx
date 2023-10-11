import { StyledFooter } from './style';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import my_foto from '../../assets/my_foto.jpeg';

const socialLinks = [
  { icon: <BsLinkedin />, url: 'https://www.linkedin.com/in/matheusferreira33/' },
  { icon: <BiLogoGmail />, url: 'https://mail.google.com/mail/?view=cm&to=matheus.fsilva33@gmail.com' },
  { icon: <AiFillGithub />, url: 'https://github.com/MatheusFerreira33' },
  { icon: <BsWhatsapp />, url: 'https://api.whatsapp.com/send?phone=11932211306&text=Olá, vim do seu site onMovie' },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <div className='box1'>
        <img src={my_foto} alt='My Foto' />
        <h3>Matheus Ferreira, Desenvolvedor Web Full-Stack</h3>
      </div>

      <ul className='box2'>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </StyledFooter>
  );
};
