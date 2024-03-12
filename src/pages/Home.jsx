import React from 'react'
import HomeStyle from "./Pages.module.scss";
import { Link } from "react-router-dom"
import Me from "./../images/me.jpg"

const Home = () => {
  return (
    <div>
      <section className={HomeStyle["about"]}>
        <h2 className={HomeStyle["title-2"]}>
          Обо мне
        </h2>

        <div className={HomeStyle["about-desc"]}>
          <p>
            Занимаюсь профессиональной версткой сайтов. Люблю когда сайт отображается аккуратно и лаконично, четко соответствует дизайну, откликается на каждое действие пользователя и идеально смотрится на любом мобильном устройстве, будь то телефон или планшет.
          </p>

          <p>
            Верстку и создание сайтов изучала самостоятельно и на курсах от IT Academy. За это время сделала несколько проектов по верстке и сайтам под ключ. Найти их вы сможете в моем <Link
              to={"/Portfolio/Portfolio"}
              className={HomeStyle["about-link"]}
            >
              портфолио.
            </Link>
          </p>
        </div>

        <div className={HomeStyle["about-image"]}>
          <img src={Me} alt="Portfolio Image" />
        </div>

        <div className={HomeStyle["about-desc"]}>
          <p>
            <b>Гарантия на верстку</b>. В течение недели после передачи архива с готовой версткой я бесплатно и сразу исправляю свои ошибки которые могли быть пропущены при приеме работы и замечены позже.
          </p>

          <p>
            Со мной удобно работать и мне важно чтобы клиент остался доволен!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home