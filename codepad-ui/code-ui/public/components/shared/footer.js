import Image from "next/image";

import Styles from "../../../styles/components/shared/footer.module.scss";

import heartLogo from "../../assets/images/black-heart-icon.png";
import moonraftLogo from "../../assets/images/moonraft_logo.svg";

export default function Footer() {
  return (
    <footer className={Styles.footerWrap}>
      <div className={Styles.footerWrap__desc}>
        <span>© {new Date().getFullYear()} Made With </span>
        <Image
          src={heartLogo}
          alt="heart"
          className={Styles.footerWrap__desc__heartLogo}
          width={22}
          height={25}
        ></Image>
        <span>by</span>
        <a
          className={Styles.footerWrap__desc__moonraftLogo}
          href="https://moonraft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={moonraftLogo}
            alt="moonraft"
            width={132}
            height={10}
          ></Image>
        </a>
      </div>
    </footer>
  );
}
