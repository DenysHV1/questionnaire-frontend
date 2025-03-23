import { useRef } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import s from "./BackLink.module.css";

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
