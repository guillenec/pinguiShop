import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="f_header">
        <a className="f_logo"><img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino03_cnrawx.gif" alt="" /></a>
        <div className="f_redesSociales" id="contacto">
          <a href="https://github.com/guillenec" className="sociales github" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/guillermo-agustin-neculqueo-57932b196/" className="sociales linkedin" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://cafecito.app/guillenec" className="sociales cafe" target="_blank">
            <ion-icon name="cafe"></ion-icon>
          </a>
          <a href="guillermoneculqueo@gmail.com" className="sociales gmail" target="_blank">
            <ion-icon name="mail"></ion-icon>
          </a>
        </div>
      </section>
      <section className="f_main">
        <section className="f_main_left">
          <form action="" method="">
            <h2>Consultas</h2>
            <div className="content_inp">
              <input className="text_inp" type="text" name='nombre' id="mail" placeholder="Nombre" />
              <label className="label" htmlFor="nombre">nombre</label>
            </div>
            <div className="content_inp">
              <input className="text_inp" type="email" name="email" id="mail" placeholder="@Mail" />
              <label className="label" htmlFor="email">@mail</label>
            </div>
            <div className="content_inp">
              <textarea className="text_inp" name="consulta" id="consulta" placeholder="Consultanos"></textarea>
              <label className="label" htmlFor="consulta">consulta</label>
            </div>
            <input className="enviar_form" type="submit" value="enviar" />
          </form>
        </section>
        <section className="f_main_right">
          <div className="mapa">
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.458996149996!2d-71.30957451952561!3d-41.13389604197415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b907b50d90b%3A0xfa53d8e07bd9784c!2sArea21%20BRC!5e0!3m2!1ses-419!2sar!4v1669789025549!5m2!1ses-419!2sar' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
        </section>
      </section>
      <section className="f_main_bottom">
        <div className="caja_f_b">
          <section className="cont_faq">
            <div className="icon">
              <a>
                <ion-icon name="shield-checkmark-outline" role="img" className="md hydrated" aria-label="shield checkmark outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>pagos 100% seguros</a></h2>
              <p>envio de datos encriptados a travez de certificacion SSL.</p>
            </div>
          </section><section className="cont_faq">
            <div className="icon">
              <a>
                <ion-icon name="wallet-outline" role="img" className="md hydrated" aria-label="wallet outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>metodos de pagos</a></h2>
              <p>aceptamos Mercadoo pago, PayPal, Tarjetas y Transferencias.</p>
            </div>
          </section><section className="cont_faq">
            <div className="icon">
              <a>
                <ion-icon name="rocket-outline" role="img" className="md hydrated" aria-label="rocket outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>entregas rapidas</a></h2>
              <p>entregas en 24hs en la mayoria de los articulos.</p>
            </div>

          </section><section className="cont_faq">

            <div className="icon">
              <a>
                <ion-icon name="send-outline" role="img" className="md hydrated" aria-label="send outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>envios gratis</a></h2>
              <p>gratis a partir de los $5000. o estando suscripto.</p>
            </div>

          </section>
        </div>
      </section>
      <section className="f_footer">
        <section className="footer_bot">
          <p>&#169; 2022, Pagina creada por <strong>@guilleNec</strong></p>
        </section>
      </section>
    </>
  )
}

export default Footer