import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Porfolio() {
  return (
    <div className="portfolios">
      <h1 className="title">Porfolio</h1>
      <section className="portfolio-center">
        {/* single article */}
        <article className="portfolio">
          <img src="/movie.png" alt="Django"></img>
          <h1>Movie API</h1>
          <p>
            I built a movie database interacting with external OMDb API using
            Django REST framework. See site
            <a
              href="https://warm-journey-10447.herokuapp.com/api/v1/movies/"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
          </p>
          <a
            href="https://github.com/ManuBoca92/django-movies-api"
            className="social-icons portfolio-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </article>
        {/* end of single article */}
        {/* single article */}
        <article className="portfolio">
          <img src="/tourism.png" alt="Django"></img>
          <h1>Tour website</h1>
          <p>
            This is a demo responsive tour company website. It was built using
            HTM5L, CSS Flexbox and JS. See site
            <a
              href="https://bocas-backroad-tours.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
          </p>
          <a
            href="https://github.com/ManuBoca92/backroads-tour"
            className="social-icons portfolio-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </article>
        {/* end of single article */}
        {/* single article */}
        <article className="portfolio">
          <img src="/software-development.png" alt="Django"></img>
          <h1>web agency website</h1>
          <p>
            A demo responsive web agency built with HTML5 and CSS Flexbox. See
            site
            <a
              href="https://bocas-web-agency.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
          </p>
          <a
            href="https://github.com/ManuBoca92/web-agency"
            className="social-icons"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </article>
        {/* end of single article */}
      </section>
    </div>
  );
}

export default Porfolio;
