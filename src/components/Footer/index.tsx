import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
        style={{ fontSize: "16px" }}
      >
        Политика конфиденциальности
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <div style={{fontWeight: 'bold'}}>
                  TGmetric
                </div>
              </LogoContainer>
            </NavLink>
            <SocialLink
                href="https://docs.google.com/document/d/1q0rBZhOZDVpJtAdJETUd4f7tOiFpCG19_dtzlkojsrI/edit?usp=sharing"
                src="github.svg"
            />
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
