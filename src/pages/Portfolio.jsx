import React from 'react'
import PortfolioStyle from "./Pages.module.scss";
import ForestTravel from "./../images/foresttravel.jpg"

const Portfolio = () => {
  return (
    <div>
      <article className={PortfolioStyle["article"]}>

        <h2 className={PortfolioStyle["title-2"]}>
          Мои работы
        </h2>

        <section className={PortfolioStyle["article-item"]}>
          <h3 className={PortfolioStyle["title-3"]}>
            Верстка макета Форест Тревел
          </h3>

          <div className={PortfolioStyle["article-item-image"]}>
            <img src={ForestTravel} alt="Верстка макета Форест Тревел" />
          </div>
          


        </section>

      </article>
    </div>
  )
}

export default Portfolio