<div background="#f3f7fe">

# 🐧 PinguiShop

<p align="center" ><img width="100%" src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1677977326/Captura_desde_2023-03-04_21-45-15_qy8whb.png" alt="banner stack guille"></p>

</br>


## 😘 Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/95813aee-90c1-4f5f-8806-b7b9f5a1c848/deploy-status)](https://app.netlify.com/sites/pinguishop/deploys) 

</br>

## 📚 Sobre el proyecto. 
* Se corresponde al proyecto final de React en Coderhouse.
* Opte por realizar una tienda de funkos ya que tenia imagenes ya guardadas de un proyecto anterior.
* Ecomerce creado con react, vite, scss y firebase,
* En mi caso nombre diferentes algunos componentes pedidos opcionales:
  * wishlist = LikeContain: en el mismo se crea una lista de productos que hayas marcado con like.. desde la lista se pueden desmarcar o comprar.


</br>

## 🏗️ Componentes Creados
![🏗️ Componentes creados pinguiShop](https://res.cloudinary.com/dpiwmbsog/image/upload/v1678760161/pinguiShopComponents_u4lxlo.svg "componentes creados pinguishop")

</br>

## 🛸 Vistao a la seccion de detalles
![🛸 Vistazo Detalles](https://res.cloudinary.com/dpiwmbsog/image/upload/v1677978216/Captura_desde_2023-03-04_21-55-21_s0oiv1.png "titulo")

## 🛸 Vistao añadiendo productos al cart y a meGustan
![🛸 Vistazo Detalles](https://res.cloudinary.com/dpiwmbsog/image/upload/v1678404584/ItemListContainer_u5ejgy.png "titulo")

## 🛸 Vistao a cart y meGusta
![🛸 Vistazo Detalles](https://res.cloudinary.com/dpiwmbsog/image/upload/v1678404895/cart_meGUsta_jkdop0.png "titulo")
</br>

## 📘 Nota: 
Quedo a la espera de sugerencias..  🐧🐧🐧 

</br>

## 👨‍💻 Dependencias
* react : 18.2.0:
  * Biblioteca de JavaScript de código abierto para la construcción de interfaces de usuario (UI) en aplicaciones web.  
  * En mi caso en mi proyecto use React+vite, por lo que use:  
    ```bash
    ╭─pescado at rabioso in ~
    ╰─○ npm create vite@latest proyectoConReact
    ```
    
  * Luego:
    ```bash 
    ╭─pescado at rabioso in ~
    ╰─○ cd proyectoConReact
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm install  
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm run dev  
    ```

* react-dom: 18.2.0:
  * Librería de React que proporciona una forma eficiente de actualizar el árbol de elementos de la interfaz de usuario (UI) de una página web.  
    ```zsh 
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm install react-dom
    ```

* react-router-dom: 6.8.0:
  * librería de React que te permite crear rutas y navegación dentro de una aplicación web de una sola página (SPA).  
    ```zsh  
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm install react-router-dom 
    ```

* firebase": 9.17.1:
  * Firebase es una plataforma de desarrollo de aplicaciones móviles y web, propiedad de Google, que proporciona una variedad de herramientas y servicios para el desarrollo de aplicaciones, la gestión de usuarios, el análisis y la monetización.
    ```zsh  
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm install firebase 
    ```

* react-slick: 0.29.0 : 
  * Es una biblioteca de carruseles (carousels) para aplicaciones web React. Me permite generar de forma facil un slider banner en mi pagina principal.  
    ```bash  
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm install react-slick 
    ```

* react-toastify: 9.1.1 : 
  * Es una biblioteca de notificaciones de estilo de toast para aplicaciones web React. Estas notificaciones son útiles para informar al usuario sobre cambios de estado en la aplicación, confirmar acciones, mostrar errores y más. 
    ```bash  
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm install --save react-toastify 
    ```     

* sass: 1.57.1:
  * Sass es un preprocesador de CSS que agrega características adicionales a los estilos CSS, como variables, anidamiento, mixins, etc.  
  en mi caso intetegrare sass a mi proyecto
    ```bash
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± npm i -D sass
    ```

  * Arme un script para poder crear automaticamente todo el arbol de directorio de scss, segun mi criterio.. si desea usarla, esta desponible abajo.

* Script: [integrar-sas-vite.zsh](./integrar-sas-vite.zsh)
  * Si desea usarlo (si usa linux 🐧🐧), copie peguelo en su proyecto, luego dele permiso de ejecusion: chmod + x integrar-sas-vite.zsh, Luego solo ejecutelo.. ./integrar-sas-vite.zsh o bash integrar-sas-vite.zsh o zsh integrar-sas-vite.zsh.. etc..
  * Tmbien puede añadirlo (cp, mv) a /usr/bin/ o alguna ruta que se encuentre en su $PATH.. para poder llamar a el script desde donde sea que se encuentre. 
    ```bash 
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± cp integrar-sas-vite.zsh /usr/bin/ 
    ```

* vite: 4.0.0:
  * Vite es un sistema de construcción (build system) para aplicaciones web de una sola página (SPA) y bibliotecas de JavaScript. Proporciona un entorno de desarrollo rapido y eficiente.
    ```bash  
    ╭─pescado at rabioso in ~/proyectoConReact on main✔
    ╰─± cp npm install vite
    ```
</br>

## 🚀 Caracteristica
  * Carrito de compras
  * Integración con Firebase Firestore
  * Integración con Firebase Authentication
  * Responsive design
  * Slider de productos destacados

</br>

## 📦 Instalación
  * Clonar el repositorio: 
    ```bash
    git clone https://github.com/guillenec/pinguiShop.git
    ```
  * Acceder a la carpeta del proyecto:
    ```bash
    cd ./pinguiShop
    ```
  * Instalar las dependencias: 
    ```bash
    npm install
    ```
  * Iniciar la aplicación: 
    ```bash
    npm start
    ```

## 👍 Espero te guste. 
Espero sea de tu agrado mi contenido, tratare de tener todo publico siempre... si te sirve mi contenido no dudes en compartirlo, pero referenciame xD.

## :octocat: Mi contacto
#### :bust_in_silhouette: [Guillermo Agustín Neculqueo](@guillenec)
#### :house: [Homepage](https://procedilinux.netlify.app/index.html)	

#### :envelope: [guillermoneculqueo@gmail](guillermoneculqueo@gmail.com)

<div>
    
