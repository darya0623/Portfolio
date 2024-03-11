import React from 'react'
import ContactStyle from "./Pages.module.scss";

const Contacts = () => {
  return (
    <div>
      <section className={ContactStyle["contact"]}>
        <h2 className={ContactStyle["title-2"]}>
          Контакты
        </h2>

        <p className={ContactStyle["contact-text"]}>
          Напишите мне на почту g0623darya@gmal.com и мы оперативно обсудим ваш проект.
        </p>

        <h3 className={ContactStyle["title-3"]}>
          Мои профили в социальных сетях:
        </h3>

        <ul className={ContactStyle["contact-list"]}>

          <li>
            <a href="https://t.me/gama_0623" target='_blank'>Telegram</a>
          </li>

          <li>
            <a href="https://www.instagram.com/gama_0623/" target='_blank'>Instagram</a>
          </li>

          <li>
            <a href="https://github.com/darya0623" target='_blank'>GitHub</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Contacts