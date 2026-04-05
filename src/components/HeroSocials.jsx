import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';

const HeroSocials = ({
    githubUrl = 'https://github.com/ojharitesh',
    linkedinUrl = 'https://www.linkedin.com/in/ritesh-ojha-785a93277/',
    email = 'riteshhojha@gmail.com'
}) => {
    const links = [
        { label: 'GitHub', href: githubUrl, icon: FaGithub, external: true },
        { label: 'LinkedIn', href: linkedinUrl, icon: FaLinkedinIn, external: true },
        { label: 'Email', href: `mailto:${email}`, icon: FaEnvelope, external: false }
    ];

    return (
        <div className="hero-socials" aria-label="Social links">
            {links.map(link => {
                const Icon = link.icon;
                return (
                    <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        title={link.label}
                        {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                    >
                        <Icon size={25} />
                    </a>
                );
            })}
        </div>
    );
};

export default HeroSocials;