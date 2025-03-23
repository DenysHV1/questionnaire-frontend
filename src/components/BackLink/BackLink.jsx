import s from "./BackLink.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackLink = ({ location }) => {
  const backLinkHref = useRef(location.state?.from || "/");
  return (
    <Link className={s.back_link} to={backLinkHref.current}>
      <IoMdArrowRoundBack className={s.back_svg} />
      Go back
    </Link>
  );
};

export default BackLink;
