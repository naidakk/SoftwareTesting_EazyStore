import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 font-primary text-gray-700 dark:text-gray-300">
      Buit with
      <FontAwesomeIcon
        icon={faHeart}
        className="text-red-600 mx-1 animate-pulse"
        aria-hidden="true"
      />
      by
      <a
        href="https://eazybytes.com/"
        target="_blank"
        rel="noreferrer"
        className="text-primary dark:text-light font-semibold px-1 transition-colors duration-300 hover:text-dark dark:hover:text-lighter"
      >
        eazybytes
      </a>
    </footer>
  );
}
