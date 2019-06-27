import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './Cookies.scss';

const myCookies = () => {

  const [hasAcceptCookies, setHasAcceptCookies] = useState(false)
  const [cookies, setCookie] = useCookies(['accept']);

  useEffect(() => {
    getCookie()
  })

  const accept = () => {
    setCookie('accept', true, { path: '/' });
  }
  const getCookie = () => {
    if (cookies.accept === "true") {
      setHasAcceptCookies(true)
    }
  }

  return (
    (hasAcceptCookies === true) ? "" : <div className="cookies__container">
      <div className="container">
        <div className="columns">
          <p className=" is-four-fifths">Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información aquí (enlace a página de cookies).</p>
          <div className="column">
            <div className="btn cookies__btn" onClick={() => accept()}>ACEPTAR</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default myCookies
