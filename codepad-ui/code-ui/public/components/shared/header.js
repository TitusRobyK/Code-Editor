import Image from "next/image";

import Styles from "../../../styles/components/shared/header.module.scss";

import headerLogo from "../../favicon.png";

export default function Header({ isAuthenticated = false }) {
  return (
    <header className={Styles.headerWrap}>
      {!isAuthenticated ? (
        <div className={Styles.headerWrap__cont}>
          <a className={Styles.headerWrap__cont__logo} href="#">
            <Image
              src={headerLogo}
              alt="codepad"
              width={36}
              height={36}
            ></Image>
          </a>
          <button className={Styles.headerWrap__cont__signIn}>
            Sign in with Google
          </button>
        </div>
      ) : null}
    </header>
  );
}
