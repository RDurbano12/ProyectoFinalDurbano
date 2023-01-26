//Se desarrollará una web dinámica, que interactúe con el usuario a través de diferentes medios:
 Modo oscuro: El usuario debe poder elegir si, al navegar en la web, el modo en el cual
se visualiza la interfaz sea en claro u oscuro. Este modo tiene que otorgar la posibilidad
de que perdure en el tiempo, es decir, una vez que el usuario defina su preferencia, el
modo debe persistir a un cierre de pestaña o navegador. El botón que desencadene el
evento, debe hallarse visible en la barra de navegación, desde todos los apartados de
la página web.
 La barra de navegación debe poder permitir movilidad y ser vista desde todos los
apartados. El traslado entre los apartados puede darse a través de diferentes archivos
HTML o bien con la habilitación/deshabilitación de la visibilidad de los contenedores
en donde se desarrollan. Esta nav debe permitirle al usuario poder desplazarse entre
las siguientes secciones: HOME, PRODUCTOS, CARRITO Y CONTACTO.
 Se precisará un footer que tenga información de contacto, la cual puede ser falsa. Este
pie de página debe ser visualizado desde todos los apartados de la web.
 SECCIÓN HOME: Se debe poder visualizar un Carrousel, el cual puede ser
implementado a través de librerías. Como sugerencia Swiper. Este elemento debe
mostrar imágenes relacionadas al contenido de la web. A su vez, el home debe
visualizar productos en oferta y que los mismos puedan ser añadidos al carrito desde
allí.
 SECCIÓN PRODUCTOS: El usuario debe poder visualizar todos los productos que
ofrezca la tienda, estos productos no pueden estar maquetados desde HTML, deben
realizarse con el método fetch y además incluir los nodos de los productos desde js. A
su vez, la web debe darle la posibilidad al usuario de que ordene estos productos de
manera ascendente (A-Z) o descendente (Z-A) y que este comportamiendo genere que
los cambios se apliquen en el instante en el cual se desencadeno el evento. También se
pueden filtrar y visualizar por oferta. Estos productos deben poder añadirse al carrito
desde un botón, que se debe encontrar incluido en la tarjeta del producto.
 SECCIÓN CARRITO: Los productos añadidos desde HOME o PRODUCTOS, deben poder
visualizarse en este apartado en forma de lista (no necesariamente se debe hacer una
tabla), a través de JS. A su vez se debe permitir que el usuario elimine un elemento del
carrito o elimine todos los elementos del carrito. En esta sección, nos concentraremos
en el cierre de la venta, por lo tanto debemos tener en cuenta de que una vez de que
el usuario terminó con el proceso, los productos no deben persistir en el carrito de
compras. Se debe, mediante un evento, enviar una notificación al usuario que exprese
la finalización de dicho transcurso.
 SECCIÓN CONTACTO: En este apartado, el usuario tendrá la posibilidad de poder llenar
un formulario, que permita contactarse con la empresa. Este formulario tiene que
validar que los datos que se ingresar son correctos. Ej: el campo que reciba un mail,
debe cotejar que el dato ingresado contenga una @, distintiva de este tipo de recurso,
que un campo nombre debe tener más de 2 caracteres, etc