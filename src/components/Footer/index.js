import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>RFCS</SocialLogo>
              <WebsiteRights>
              RFCS © {new Date().getFullYear()}
               All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target="_blank" aria-label = "Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label = "Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label = "Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label = "Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label = "Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
