import React from 'react'
import PortfolioStyle from "./Pages.module.scss";
import Mers from "./../images/mers.jpg"

const Portfolio = () => {
  return (
    <div>
      <article className={PortfolioStyle["article"]}>

        <h2 className={PortfolioStyle["title-2"]}>
          Мои работы
        </h2>

        <section className={PortfolioStyle["article-item"]}>
          <h3 className={PortfolioStyle["title-3"]}>
            Верстка и разработка JS логики Mercedes
          </h3>

          <div className={PortfolioStyle["article-item-image"]}>
            <img src={Mers} alt="Верстка макета Форест Тревел" />
          </div>
          
          <a target='_blank' href="https://darya0623.github.io/Mercedes/">Смотреть работу</a>

        </section>

      </article>
    </div>
  )
}

export default Portfolio