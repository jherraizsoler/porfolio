// 1. Datos de todos los proyectos en un objeto
const projectsData = {
  "1_es": {
    title: "Proyecto FullStack App Desktop Sistema de Tareas",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Este proyecto es una aplicación **Full-Stack de escritorio** diseñada para la gestión completa de tareas. Combina un robusto backend con una interfaz de usuario nativa y moderna para ofrecer una experiencia fluida y eficiente. Su objetivo es proporcionar una herramienta completa para realizar operaciones **CRUD** (Crear, Leer, Actualizar y Borrar).</p>
        
        <h4>Backend: El Núcleo del Sistema</h4>
        <p>El backend está desarrollado con **Spring Boot** y **Spring Framework**, lo que garantiza una arquitectura sólida. Utiliza **JPA** (Java Persistence API) para la persistencia, con la información almacenada en una base de datos **MySQL**. La integración de **Lombok** optimiza el código y reduce la verbosidad para un desarrollo más ágil.</p>
        
        <h4>Frontend: Experiencia de Usuario Moderna</h4>
        <p>El frontend se construye con **JavaFX**, una librería para crear interfaces de usuario de escritorio. Esta elección permite diseñar una UX/UI moderna y nativa que se integra perfectamente con el sistema operativo del usuario.</p>
        
        <h4>Integración y Funcionalidad Completa</h4>
        <p>El proyecto es un verdadero sistema Full-Stack, donde el frontend se comunica con el backend de Spring Boot a través de una **API RESTful**. Esta separación de responsabilidades permite que cada capa se desarrolle de forma independiente.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto1/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto1/ventanaPrincipal_1.jpeg",
    ],
    skills: [
      "JavaFX",
      "Spring Framework",
      "MySQL",
      "Programación",
      "Maven",
      "JPA",
      "Spring Boot",
      "Lombok",
      "Gestión de proyectos",
      "Metodologías ágiles",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/tareas_JavaFX-SpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363223176245370881-Sg4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "2_es": {
    title: "Proyecto FullStack App Web Sistema de Personas",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Desarrollé un sistema de gestión de personas completo, aplicando un enfoque **full-stack con tecnologías de Jakarta EE**. El proyecto está construido sobre una arquitectura robusta, utilizando un stack moderno y empresarial ideal para aplicaciones de negocio.</p>
        
        <h4>Capa de Presentación</h4>
        <p>Diseñé y desarrollé la interfaz de usuario con **Jakarta Server Faces (JSF)**, mejorada con la biblioteca de componentes **PrimeFaces** para una experiencia web interactiva y receptiva.</p>
        
        <h4>Lógica de Negocio y Persistencia</h4>
        <p>La lógica de negocio se implementa de forma segura y transaccional con **Enterprise JavaBeans (EJB)**, mientras que la persistencia de datos se gestiona con **Jakarta Persistence API (JPA)** y **EclipseLink** para un mapeo ORM eficiente con una base de datos **MySQL**. El despliegue se realizó en un servidor **GlassFish 8.0.0**.</p>
        
        <h4>Seguridad y Modularidad</h4>
        <p>El sistema incluye un módulo de seguridad con roles de usuario (admin, user, guest), garantizando el acceso controlado a las funcionalidades. Este proyecto demuestra una sólida comprensión de las mejores prácticas de desarrollo de software empresarial, incluyendo la separación de preocupaciones y la modularidad del código, lo que lo hace un proyecto fácilmente escalable y mantenible.</p>
        
        <h4>Documentación</h4>
        <p>El proyecto cuenta con manuales de instalación y configuración en el apartado de README.md, y en el paquete de documentación se encuentra todo lo necesario y los requisitos para testear el proyecto en **Netbeans**.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto2/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto2/Pantalla_EditarPersona.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_EliminarPersona.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_ListadoPersonas.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_Login_Usuario_es_admin o user_Contraseña_es_123_.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_Principal_User_.jpg",
    ],
    skills: [
      "Jakarta EE",
      "MySQL",
      "GlassFish",
      "Jakarta JWS",
      "PrimeFaces",
      "Maven",
      "EJB",
      "SLF4J",
      "JPA",
      "EclipseLink",
      "Java",
      "Gestión y documentación de proyectos",
      "HTML5",
      "Metodologías ágiles",
      "Apache Netbeans IDE",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-ejb-jee-web",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364310370116583424-1ZNv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "3_es": {
    title: "Proyecto FullStack App Web Sistema de Contactos",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Desarrollé un **Sistema de Gestión de Contactos** completo y funcional, diseñado para una administración eficiente de la información. Este proyecto full-stack me permitió aplicar mis conocimientos en el desarrollo de aplicaciones web, desde la persistencia de datos hasta la interfaz de usuario, utilizando un stack tecnológico moderno y robusto.</p>
        
        <h4>Funcionalidad CRUD</h4>
        <p>El corazón de la aplicación es la funcionalidad **CRUD (Crear, Leer, Actualizar, Borrar)**, que permite a los usuarios gestionar sus contactos de manera intuitiva y segura. Cada operación está validada para asegurar la integridad de los datos.</p>
        
        <h4>Tecnologías Backend</h4>
        <p>En el backend, utilicé **Java con Spring Boot 3.5.3**, creando un sistema escalable y de alto rendimiento. Para la capa de persistencia, integré **Spring Data JPA** con una base de datos **MySQL**, lo que simplificó la interacción con los datos. La gestión de dependencias fue manejada por **Maven**, y la integración de **Lombok** me ayudó a mantener un código limpio y conciso.</p>
        
        <h4>Interfaz de Usuario</h4>
        <p>La interfaz de usuario fue construida con **Thymeleaf**, un motor de plantillas que se integra perfectamente con Spring. Esto me permitió desarrollar una experiencia de usuario fluida y generar vistas dinámicas del lado del servidor.</p>
        
        <p>En resumen, este proyecto es una prueba concreta de mis habilidades como desarrollador full-stack, demostrando mi capacidad para construir soluciones completas y prácticas que resuelven problemas del mundo real.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto3/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto3/Pantalla_AgregarContactol.jpg",
      "Media/Proyectos/Proyecto3/Pantalla_EditarContacto.jpg",
      "Media/Proyectos/Proyecto3/Pantalla_principal.jpg",
    ],
    skills: [
      "Spring Framework",
      "MySQL",
      "Thymeleaf",
      "Programación",
      "Maven",
      "JPA",
      "Administración de sistemas y servidores",
      "CSS Responsive",
      "SASS",
      "Flexbox",
      "Grid",
      "Bootstrap",
      "Spring Boot",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/contactos_Thymeleaf-SpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363947996163510272-Z__I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "4_es": {
    title: "Proyecto FullStack App Web Sistema de Empleados",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Desarrollé un **Sistema de Gestión de Empleados**, una aplicación web robusta y escalable construida con **Spring Boot**. La aplicación permite realizar operaciones **CRUD completas** (Crear, Leer, Actualizar, Borrar) sobre la información del personal, proporcionando una solución integral para la administración de datos.</p>
        
        <h4>Arquitectura y Tecnologías</h4>
        <p>El proyecto está diseñado con una arquitectura clara, utilizando **Java** como lenguaje principal. El backend se apoya en el ecosistema de **Spring**, con **JPA** e **Hibernate** para la gestión de la persistencia de datos en una base de datos **MySQL**. En el frontend, se emplearon **JSP** y **JSTL** para crear una interfaz de usuario dinámica e intuitiva, asegurando una experiencia de usuario fluida.</p>
        
        <h4>Productividad y Mantenibilidad</h4>
        <p>Para optimizar el código y mejorar la productividad, se integró la librería **Lombok**, reduciendo significativamente el código repetitivo. Este proyecto destaca mi habilidad para trabajar con un stack tecnológico completo (Java, Spring Boot, JPA, Hibernate, MySQL, JSP, JSTL, Maven), demostrando experiencia en el desarrollo de aplicaciones web empresariales funcionales y mantenibles.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto4/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto4/Pantalla_agregarEmpleado.jpg",
      "Media/Proyectos/Proyecto4/Pantalla_editarEmpleado.jpg",
      "Media/Proyectos/Proyecto4/Pantalla_principal.jpg",
    ],
    skills: [
      "JSTL",
      "Tomcat",
      "Spring Framework",
      "Hibernate",
      "MySQL",
      "Programación",
      "Maven",
      "JPA",
      "Spring Boot",
      "Gestión y documentación de proyectos",
      "JSP",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
    ],
    links: {
      github: "https://github.com/jherraizsoler/empleados_JavaJSP-SpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364234844140109825-Z7zG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "5_es": {
    title: "Proyecto Frontend App Web Sistema de Presupuestos",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Desarrollé este proyecto personal, una solución integral y robusta para la **gestión financiera**, construida desde cero con el framework **Angular 18**. La aplicación permite a los usuarios gestionar y calcular presupuestos de manera intuitiva y eficiente, brindando un control total sobre sus finanzas personales o profesionales. Su diseño se centró en ofrecer una experiencia de usuario fluida y sin fricciones, con un enfoque en la facilidad de uso.</p>

        <h4>Diseño y Arquitectura</h4>
        <p>La interfaz de usuario fue diseñada con **Bootstrap 5** y **Bootstrap Icons**, creando un diseño moderno y responsivo. Se implementó una **arquitectura de componentes modular**, lo que garantiza la reutilización del código y facilita el mantenimiento y la escalabilidad a largo plazo.</p>

        <h4>Funcionalidades y Herramientas</h4>
        <ul>
            <li>Para la **gestión de datos asíncronos** y la optimización del rendimiento, se utilizó **RxJS**.</li>
            <li>Para la captura de datos, se combinaron **Reactive Forms** y **Template Driven Forms**, demostrando mi versatilidad y conocimiento profundo de las capacidades de Angular.</li>
            <li>El proyecto también incluye una **navegación dinámica** con **Angular Router**, asegurando una experiencia de usuario fluida y sin recargas de página.</li>
            <li>Componentes clave como cabecero, ingreso y egreso fueron desarrollados de manera independiente, subrayando un enfoque en la **separación de responsabilidades** y la organización del código.</li>
        </ul>

        <p>En resumen, este sistema de presupuestos es un reflejo tangible de mis habilidades como desarrollador **front-end**. Muestra mi dominio de **TypeScript** y **Angular**, mi compromiso con las mejores prácticas de la industria y mi capacidad para convertir un concepto en una aplicación funcional y de alta calidad.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto5/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto5/Ventana_principal.jpg",
    ], // Agrega las rutas a tus imágenes si las tienes, por ejemplo: ['Media/proyectos/Proyecto5/imagenPrincipal.jpeg']
    skills: [
      "Angular",
      "Desarrollo front end",
      "Programación",
      "Administración de sistemas y servidores",
      "Microsoft Visual Studio Code",
      "CSS Responsive",
      "SASS",
      "Flexbox",
      "Grid",
      "Bootstrap",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "HTML5",
      "Metodologías ágiles",
      "Angular CLI",
      "TypeScript",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/appPresupuesto_angular",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363842300013142016-hAWD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "6_es": {
    title: "Proyecto FullStack App Web Sistemas de Personas",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Este proyecto es una aplicación web de gestión empresarial completa, diseñada para la administración eficiente de personas. Desarrollado con el ecosistema de **Jakarta EE**, implementa una arquitectura **MVC** robusta, lo que asegura un código escalable y una clara separación de las responsabilidades.</p>

        <h4>Arquitectura y Tecnologías</h4>
        <p>La aplicación integra la **inyección de dependencias de CDI** para un diseño desacoplado y utiliza **JPA** (con **EclipseLink**) para la capa de persistencia, gestionando las operaciones **CRUD** sobre una base de datos **MySQL**. En el frontend, se emplea **JavaServer Faces (JSF)** en combinación con la librería de componentes **PrimeFaces**, proporcionando una interfaz de usuario rica, moderna y altamente interactiva.</p>

        <h4>Despliegue y Gestión</h4>
        <p>El proyecto se gestiona con **Maven** y se despliega en un servidor **GlassFish**. Esta experiencia me ha permitido consolidar mis conocimientos en el desarrollo de aplicaciones full-stack y me ha proporcionado una sólida comprensión de las tecnologías empresariales de Java.</p>

        <h4>Tecnologías Clave</h4>
        <ul>
            <li><strong>Backend:</strong> Java, Jakarta EE, EJB, JPA, EclipseLink, CDI</li>
            <li><strong>Frontend:</strong> JSF, PrimeFaces</li>
            <li><strong>Base de Datos:</strong> MySQL</li>
            <li><strong>Servidor:</strong> GlassFish Server</li>
            <li><strong>Gestor de Dependencias:</strong> Maven</li>
        </ul>
    `,
    images: [
      "Media/Proyectos/Proyecto6/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto6/Pantalla_AgregarPersona.jpg",
      "Media/Proyectos/Proyecto6/Pantalla_ListadoPersonas.jpg",
      "Media/Proyectos/Proyecto6/Pantalla_principal.jpg",
      "Media/Proyectos/Proyecto6/Pantalla_SeleccionPersona_EditarPersona.jpg",
    ],
    skills: [
      "Jakarta EE",
      "MySQL",
      "Programación",
      "PrimeFaces",
      "Maven",
      "Enterprise JavaBeans",
      "JPA",
      "EclipseLink",
      "Java",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Apache Netbeans IDE",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-jee-primefaces-web",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364310370116583424-1ZNv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "7_es": {
    title:
      "Proyecto FullStack GymFlow: Sistema Integral de Gestión de clientes para Gimnasios",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p><strong>GymFlow</strong> es una solución de software full-stack diseñada para optimizar las operaciones de administración en gimnasios y centros de fitness. Este proyecto combina una arquitectura robusta de backend con múltiples interfaces de usuario, lo que demuestra la versatilidad para crear aplicaciones tanto de escritorio como web.</p>

        <h4>Backend y Base de Datos</h4>
        <p>El backend se ha desarrollado utilizando <strong>Java</strong> con el framework <strong>Spring Boot</strong>. La persistencia de datos se gestiona con <strong>JPA</strong>, mapeando la información de clientes a una base de datos <strong>MySQL</strong>. La librería <strong>Lombok</strong> se ha integrado para reducir el código repetitivo. El servidor web embebido <strong>Tomcat</strong> se encarga de servir la aplicación web y gestionar las peticiones HTTP.</p>

        <h4>Interfaces de Usuario (Frontend)</h4>
        <p>El frontend del proyecto es excepcionalmente versátil, ofreciendo dos tipos de interfaces:</p>
        <ul>
            <li><strong>Aplicación de Escritorio:</strong> Desarrollada con <strong>Java Swing</strong> y <strong>Console</strong>, ideal para un uso local y rápido por parte del personal administrativo.</li>
            <li><strong>Aplicación Web:</strong> Construida con <strong>JSF (JavaServer Faces)</strong> y la librería <strong>PrimeFaces</strong>, que proporciona componentes interactivos y una UX/UI moderna, accesible desde cualquier navegador.</li>
        </ul>

        <p>Este proyecto destaca mis habilidades en el desarrollo de software full-stack, la gestión de bases de datos, y la creación de interfaces de usuario funcionales y elegantes en entornos de escritorio y web.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto7/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_AgregarCliente_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_BuscarClientePorID_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_EliminarCliente_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_ListadoDatos_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_Salir_Console.jpg",
      "Media/Proyectos/Proyecto7/PantallaPrincipal_DatosGuardados_Swing_GUI_DESKTOP.jpg",
      "Media/Proyectos/Proyecto7/PantallaPrincipal_DatosSeleccionados_Swing_GUI_DESKTOP.jpg",
      "Media/Proyectos/Proyecto7/PantallaPrincipal_Swing_GUI_DESKTOP.jpg",
    ],
    skills: [
      "Spring Framework",
      "Programación",
      "Maven",
      "Java Swing",
      "Administración de sistemas y servidores",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Apache Netbeans IDE",
      "Console",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github:
        "https://github.com/jherraizsoler/GymFlow_ZonaFitConsoleSwingWebSpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_me-alegra-compartir-que-he-trabajado-en-este-activity-7363479906225209344-u4JU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "8_es": {
    title: "Proyecto Backend Sistemas de Personas",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>El proyecto <strong>personas-backend-java</strong> es un servicio web **RESTful** que actúa como la columna vertebral de la aplicación. Está construido con el estándar **Jakarta EE** y se ejecuta en un servidor **GlassFish**. Su propósito principal es gestionar la lógica de negocio y la persistencia de datos relacionados con la información de personas.</p>

        <h4>Funcionalidades y Arquitectura</h4>
        <p>Este backend expone una **API REST** que permite a las aplicaciones cliente, como el **personas-frontend-angular**, realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre la información. Utilizando el protocolo **HTTP**, los clientes pueden enviar y recibir datos en formato **JSON** para interactuar con la base de datos.</p>

        <p>El proyecto se encarga de la comunicación con la base de datos, el procesamiento de las peticiones y la validación de los datos, asegurando la integridad y consistencia de la información. Su diseño modular y desacoplado permite que cualquier frontend pueda consumir sus servicios, garantizando una arquitectura flexible y escalable.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto8/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto8/Postmanjpg.jpg",
    ],
    skills: [
      "Jakarta EE",
      "Programación",
      "GlassFish",
      "Maven",
      "JPA",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
      "Capacidad de análisis e investigación.",
      "MySQL",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-backend-java",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364672707344408576-6zC2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "9_es": {
    title: "Proyecto Backend Sistemas de Inventario de productos",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Este proyecto es una solución **backend** robusta y escalable, diseñada para la gestión completa y automatizada del inventario de productos. El sistema se construye alrededor de una **API RESTful** que actúa como el motor central, permitiendo la comunicación eficiente con cualquier interfaz de usuario (web, móvil o de escritorio).</p>

        <h4>Funcionalidades Clave</h4>
        <ul>
            <li><strong>Gestión de Inventario en Tiempo Real:</strong> Seguimiento de niveles de stock, registro de entradas y salidas, y notificaciones automáticas para alertar sobre stock bajo.</li>
            <li><strong>Seguridad y Autenticación:</strong> Un sistema de autenticación y autorización para garantizar que solo el personal autorizado acceda a la base de datos.</li>
            <li><strong>Integración con Base de Datos:</strong> Conexión a una base de datos relacional o no relacional para un almacenamiento seguro y persistente, optimizado para consultas rápidas.</li>
            <li><strong>Reportes y Analíticas:</strong> Funcionalidad para generar informes detallados sobre el estado del stock, el historial de movimientos y métricas de rendimiento.</li>
        </ul>

        <h4>Arquitectura y Tecnologías</h4>
        <p>El corazón de este proyecto se centra en las operaciones de gestión de productos, facilitando las funciones **CRUD** (Crear, Leer, Actualizar y Borrar). La arquitectura del sistema está diseñada para ser modular y extensible, lo que permite una fácil integración con otras plataformas, como sistemas de punto de venta (POS) o tiendas de comercio electrónico.</p>
    `,
    images: [ "Media/Proyectos/Proyecto9/imagenPrincipal.jpeg" ], // Agrega las rutas a tus imágenes si las tienes
    skills: [
      "Spring Framework",
      "MySQL",
      "Programación",
      "Maven",
      "JPA",
      "Java",
      "Spring Boot",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
    ],
    links: {
      github: "https://github.com/jherraizsoler/inventarios_springboot_backend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364567005435183106-GUO_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "10_es": {
    title: "Proyecto Backend Sistema de empleados de RRHH",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Este proyecto backend es un sistema de gestión de recursos humanos que implementa una **API REST** para administrar la información de los empleados. Su objetivo principal es ofrecer una solución robusta y eficiente para realizar operaciones **CRUD** (Crear, Leer, Actualizar, Borrar) sobre los registros de los empleados. La arquitectura está diseñada para ser modular y fácil de consumir por un frontend.</p>

        <h4>Tecnologías Clave</h4>
        <p>El desarrollo se realiza con **Spring Boot**, que simplifica la configuración y el arranque de aplicaciones Java. Para la capa de persistencia, se utiliza **JPA** (con **Hibernate**), lo que facilita la interacción con una base de datos **MySQL** al mapear objetos Java a tablas relacionales. La conectividad se maneja a través de **JDBC**.</p>
        <p>Para reducir el código repetitivo, se integra la librería **Lombok**, lo que mejora la legibilidad y la productividad del código.</p>

        <h4>Funcionalidad y API</h4>
        <p>El backend expone una **API RESTful** que permite la completa gestión de los datos de los empleados, proporcionando los siguientes puntos finales:</p>
        <ul>
            <li><strong>Crear (Create):</strong> Para registrar un nuevo empleado.</li>
            <li><strong>Leer (Read):</strong> Para consultar un empleado por su ID o recuperar una lista completa.</li>
            <li><strong>Actualizar (Update):</strong> Para modificar datos de un empleado existente.</li>
            <li><strong>Borrar (Delete):</strong> Para eliminar un registro de empleado.</li>
        </ul>
        <p>Esta estructura de API desacopla el backend del frontend, permitiendo que aplicaciones de cliente como las construidas con React o Angular se conecten y gestionen los datos de manera fluida y eficiente.</p>
    `,
    images: [ "Media/Proyectos/Proyecto10/imagenPrincipal.jpeg" ],
    skills: [
      "Spring Framework",
      "MySQL",
      "Java Database Connectivity (JDBC)",
      "Programación",
      "Maven",
      "Administración de sistemas y servidores",
      "Spring Boot",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/rh_springboot_backend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363117473442729984-SFbf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "11_es": {
    title: "Proyecto Frontend App Web Sistemas de Personas",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>El proyecto **personas-frontend-angular** es una **Single-Page Application (SPA)**, desarrollada como la capa de presentación de un sistema de gestión de datos. El objetivo principal fue construir una interfaz de usuario fluida y de alto rendimiento, sin recargas de página. El desarrollo se basa en **Angular 19.2.0**, un framework robusto y modular ideal para aplicaciones escalables.</p>

        <h4>Tecnologías y Metodologías</h4>
        <p>El uso de **TypeScript** fue clave para el éxito del proyecto, ya que su sistema de tipado estático mejora la fiabilidad y legibilidad del código. La **Angular CLI** fue una herramienta esencial para la productividad, automatizando la generación de componentes y simplificando tareas de compilación.</p>

        <h4>Funcionalidades y Rendimiento</h4>
        <p>Para la gestión eficiente de operaciones asíncronas, el proyecto utiliza **RxJS** y "observables", lo que garantiza que la interfaz de usuario se mantenga fluida. La funcionalidad principal se centra en proveer una interfaz completa para las operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) sobre la entidad "persona". Cada una de estas funcionalidades está construida con componentes reutilizables, facilitando la escalabilidad.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto11/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto11/pantalla_principal.jpg",
      "Media/Proyectos/Proyecto11/pantalla_principal_seleccion_a_una_persona.jpg",
    ],
    skills: [
      "Angular",
      "Programación",
      "Administración de sistemas y servidores",
      "Microsoft Visual Studio Code",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Angular CLI",
      "API de Postman",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-frontend-angular",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_me-alegra-compartir-que-he-trabajado-en-este-activity-7363585596990066688-W4p-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "12_es": {
    title: "Proyecto Frontend Sistemas de Inventario de productos",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Este proyecto representa la interfaz de usuario (**frontend**) de un sistema de inventario de productos, diseñado para ser intuitivo y reactivo. Su principal objetivo es proporcionar una experiencia de usuario fluida y eficiente para la gestión de productos, utilizando los datos proporcionados por la API RESTful del backend.</p>

        <p>El frontend se desarrolla con **Angular** para construir una **Single-Page Application (SPA)**, lo que garantiza transiciones rápidas y una interacción dinámica sin recargas constantes, mejorando la usabilidad.</p>

        <h4>Funcionalidades Clave de la Interfaz</h4>
        <ul>
            <li><strong>Gestión de Productos:</strong> Módulo dedicado con formularios para agregar, editar y eliminar productos. Las validaciones en el lado del cliente aseguran que los datos sean correctos antes de ser enviados.</li>
            <li><strong>Diseño Adaptable (Responsive Design):</strong> La interfaz se adapta a diferentes tamaños de pantalla, lo que permite su uso óptimo en dispositivos de escritorio y móviles, garantizando accesibilidad y flexibilidad.</li>
            <li><strong>Manejo de Errores y Notificaciones:</strong> Un sistema de notificaciones visuales que informa al usuario sobre el éxito de las operaciones o sobre cualquier error, proporcionando retroalimentación clara y oportuna.</li>
        </ul>

        <p>En resumen, este frontend es la cara visible de la aplicación de inventario, un componente vital que traduce la lógica compleja del backend en una herramienta accesible y poderosa para los usuarios finales.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto12/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto12/Pantalla_principal.jpg",
      "Media/Proyectos/Proyecto12/Pantalla_AgregarProducto.jpg",
      "Media/Proyectos/Proyecto12/Pantalla_EditarProducto.jpg",
    ],
    skills: [
      "Angular",
      "Programación",
      "Microsoft Visual Studio Code",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Angular CLI",
      "TypeScript",
      "Planificación de proyectos",
    ],
    links: {
      github:
        "https://github.com/jherraizsoler/inventario-app_angular_frontend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364597242957074435-43O7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "13_es": {
    title: "Proyecto Frontend App Web Sistema de RRHH Empleados",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Este proyecto frontend es la interfaz de usuario para un sistema de gestión de recursos humanos. Construido como una **aplicación de una sola página (SPA)**, su propósito es ofrecer una experiencia intuitiva para realizar operaciones **CRUD** (Crear, Leer, Actualizar, Borrar) de empleados, interactuando directamente con una API de backend.</p>

        <h4>Tecnologías Clave</h4>
        <ul>
            <li>La interfaz de usuario está desarrollada con **React**, y la navegación se gestiona con **react-router-dom**.</li>
            <li>La comunicación con el backend (la API de Spring Boot) se gestiona con **axios**, una librería de cliente HTTP basada en promesas.</li>
            <li>Se utiliza **react-number-format** para asegurar que la entrada de datos numéricos, como el salario, se maneje y muestre de manera correcta, mejorando la usabilidad de los formularios.</li>
        </ul>

        <h4>Funcionalidad y Experiencia de Usuario</h4>
        <p>La aplicación proporciona una experiencia completa para la gestión de empleados, incluyendo:</p>
        <ul>
            <li><strong>Página principal:</strong> Muestra una lista de todos los empleados.</li>
            <li><strong>Formularios de creación y edición:</strong> Permiten añadir nuevos empleados o modificar los datos de los existentes.</li>
            <li><strong>Gestión de datos:</strong> Los datos se obtienen del backend mediante llamadas API, y cualquier cambio realizado se envía al servidor para su persistencia.</li>
        </ul>
        <p>Esta estructura separa la lógica de la interfaz de usuario de la lógica de negocio, lo que hace que el desarrollo sea más escalable y fácil de mantener.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto13/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto13/pantalla_principal.jpg",
      "Media/Proyectos/Proyecto13/pantalla_AgregarEmpleado.jpg",
      "Media/Proyectos/Proyecto13/pantalla_EditarEmpleado.jpg",
    ],
    skills: [
      "Programación",
      "Administración de sistemas y servidores",
      "React",
      "Microsoft Visual Studio Code",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/rh_app_react_frontend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363147659655757824-1Srn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "14_es": {
    title: "Proyecto Backend API RESTFull Zafra Retail",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Se presenta el desarrollo de una **API RESTful** con **.NET 8**, concebida como el pilar tecnológico para la gestión interna y operativa de Zafra, una empresa multinacional de moda. La API actúa como un sistema centralizado para administrar todos los recursos de la empresa, desde la cadena de suministro hasta la gestión de tiendas.</p>
        
        <h4>Arquitectura y Funcionalidades</h4>
        <p>La arquitectura del backend se basa en **Clean Architecture**, garantizando un código modular, mantenible y escalable. Utiliza **Entity Framework Core** para la persistencia de datos en una base de datos **SQL Server**. La API proporciona un conjunto de endpoints diseñados para empoderar a los equipos internos con las siguientes funcionalidades:</p>
        <ul>
            <li><strong>Gestión de Inventario y Stock:</strong> Control en tiempo real del stock con visibilidad en almacenes y tiendas.</li>
            <li><strong>Administración de Tiendas y Almacenes:</strong> Gestión de la información de sucursales y ubicaciones.</li>
            <li><strong>Gestión de Personal y Roles:</strong> Administración de usuarios y permisos.</li>
            <li><strong>Gestión de Catálogo:</strong> Administración de marcas, categorías y colecciones.</li>
            <li><strong>Generación de Informes:</strong> Endpoints para la obtención de datos críticos para la toma de decisiones.</li>
        </ul>

        <p>Este backend es la columna vertebral digital de Zafra, permitiendo una gestión interna unificada y eficiente, y proporcionando la infraestructura necesaria para su crecimiento.</p>
    `,
    images: [ "Media/Proyectos/Proyecto14/imagenPrincipal.jpeg" ],
    skills: [
      "C#",
      "Diseño de experiencia de usuario (UX) y interfaz de usuario (UI)",
      "Resolución de problemas",
      ".NET Framework",
      "Desarrollo web back end",
      "Desarrollo de software",
      "Inglés",
      "Programación",
      "Maven",
      "Liderazgo",
      "Administración de sistemas y servidores",
      "ASP.NET MVC",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Entity Framework (EF) Core",
      "Planificación de proyectos",
      "Diseño y administración de bases de datos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/RetailApp.Backend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_me-alegra-compartir-que-estoy-trabajado-en-activity-7356720798738329600-0MyI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "15_es": {
    title: "Proyecto fullstack App Movil PersonalHub",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Desarrollé **PersonalHubApp**, una aplicación móvil en **Kotlin** y **Jetpack Compose** que actúa como un centro personal de gestión. Este proyecto individual me ha permitido profundizar en el desarrollo nativo de Android, enfocándome en la arquitectura, la persistencia de datos y la seguridad.</p>

        <h4>Características Principales y Tecnologías</h4>
        <ul>
            <li><strong>Tecnologías:</strong> Utilicé **Kotlin** para la lógica de la aplicación y **Jetpack Compose** para construir la UI de forma declarativa y fluida.</li>
            <li><strong>Persistencia de Datos:</strong> La información se almacena localmente en archivos **JSON**, ofreciendo flexibilidad sin depender de una conexión constante.</li>
        </ul>

        <h4>Seguridad y Funcionalidades en Desarrollo</h4>
        <p>Estoy implementando un sistema de cifrado de archivos para proteger la confidencialidad de los datos. Para la autenticación, se está desarrollando un sistema de inicio de sesión con usuario y contraseña validado contra una base de datos **MongoDB**, con una opción de autenticación biométrica para un acceso más rápido.</p>

        <p>El proyecto se enfoca en ir implementando secciones funcionales como Salud, Estudio, Finanzas y Productividad:</p>
        <ul>
            <li><strong>Salud:</strong> Incluirá un control de pastillas con notificaciones y la posibilidad de visualizar registros en un listado o en un calendario.</li>
            <li><strong>Estudio:</strong> Contará con un temporizador Pomodoro que registrará y mostrará horas, sesiones y descansos por día, semana, mes y año.</li>
        </ul>
    `,
    images: [
      "Media/Proyectos/Proyecto15/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto15/1.png",
      "Media/Proyectos/Proyecto15/2.png",
      "Media/Proyectos/Proyecto15/3.png",
      "Media/Proyectos/Proyecto15/4.png",
      "Media/Proyectos/Proyecto15/5.png",
      "Media/Proyectos/Proyecto15/6.png",
      "Media/Proyectos/Proyecto15/7.png",
      "Media/Proyectos/Proyecto15/8.png",
      "Media/Proyectos/Proyecto15/9.png",
      "Media/Proyectos/Proyecto15/10.png",
      "Media/Proyectos/Proyecto15/11.png",
      "Media/Proyectos/Proyecto15/12.png",
    ],
    skills: [
      "Programación",
      "Maven",
      "JSON",
      "Android",
      "JetPack Compose",
      "biometric",
      "Administración de sistemas y servidores",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Kotlin",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personalHubAPP",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7360397052524003328-unj1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "16_es": {
    title: "ShopFlow - Gestión Integral de Tiendas",
    content: `
        <h3>Descripción del Proyecto</h3>
        <p>Este proyecto es una aplicación **Full-Stack** completa diseñada para la gestión integral de tiendas. Proporciona una solución robusta y escalable para administrar productos, ventas, inventario y empleados, con una interfaz de usuario intuitiva y optimizada para la productividad.</p>
        
        <h4>Backend: El Núcleo del Sistema</h4>
        <p>El backend se basa en un framework moderno y eficiente que asegura una arquitectura sólida y modular. Se utiliza una **API RESTful** para la comunicación fluida con el frontend, permitiendo la separación de responsabilidades y un desarrollo independiente de cada capa.</p>
        
        <h4>Frontend: Experiencia de Usuario Moderna</h4>
        <p>El frontend se desarrolla con tecnologías que permiten crear una experiencia de usuario (UX/UI) moderna y responsiva. La interfaz está diseñada para ser intuitiva, facilitando la navegación y el acceso a todas las funcionalidades del sistema.</p>
        
        <h4>Integración y Funcionalidad Completa</h4>
        <p>ShopFlow es un sistema **Full-Stack** que integra todas las funcionalidades necesarias para la gestión de una tienda, desde el registro de ventas hasta el control de inventario y la administración de empleados, garantizando que el frontend y el backend trabajen en armonía.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto16/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto16/VentanaPrincipal.jpg",
      "Media/Proyectos/Proyecto16/VentanaPrincipal_graficos.jpg",
      "Media/Proyectos/Proyecto16/Ventana_AgregarTienda.jpg",
      "Media/Proyectos/Proyecto16/Ventana_EditarTienda.jpg"
    ],
    skills: [
      "Angular",
      "Programación",
      "Administración de sistemas y servidores",
      "Microsoft Visual Studio Code",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Angular CLI",
      "API de Postman",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/ShopFlow_ControlTiendas",
      linkedin: "https://lnkd.in/p/dxk_Axrc",
    },
  },
  
  
  "17_es": {
        title: "Proyecto Frontend Porfolio Jorge Herraiz Soler",
        content: "Estoy realizando mi porfolio desde cero, estoy materializando mis ideas de aquel porfolio que me gustaría tener, cuáles son las primeras sensaciones y cuidar el contenido. Quiero crear un porfolio que demuestre quien soy, que es lo que hago, cuál es mi iniciativa, mi camino, cuáles son mis valores, principios y el cuidado de los detalles. Me gusta mostrar en el porfolio, el disfrute y estudio constante que estoy desarrollando desde hace 3 años focalizándome en el sector IT. Tecnologías utilizadas: - HTML5 - CSS3 - JavaScript - Shoelace-style para algunos componentes para sección Académica y Experiencia Aprendizaje, elementos o componentes nuevos: - Nav estatico, componente blanco izquierdo con botones de guia por el portafolio (clip-path) - Footer Statico (z-index) - Circulo radius filtro blur cursor, Diseño y UX/UI - Cambio de Idioma Boton / Componente modalidad traductor Ingles y Español - Modo Dark / Light Boton / Componente modalidad Visibilidad / colores - PopUps / Ventanas emergentes Mostrar mas información sobre los proyectos - Sección Académico mejorado - Sección Experiencia mejorado - Sección Proyectos mejorado - Sección Cursos y Certificaciones actualizado - Sección Tecnologías implementado y mejorado - Sección Recomendaciones implementado y mejorado Ultima actualización 19/09/2025 @jherraizsoler",
        images: [
          "Media/Proyectos/Proyecto17/imagenPrincipal.jpg",
          "Media/Proyectos/Proyecto17/imagenPrincipal.jpg",
          "Media/Proyectos/Proyecto17/imagenPrincipal_componenteAbierto.jpg",
          "Media/Proyectos/Proyecto17/imagen_Internalización_Ingles_Español.jpg",
          "Media/Proyectos/Proyecto17/imagen_mode_Dark.jpg",
          "Media/Proyectos/Proyecto17/imagen_mode_Light.jpg",
          "Media/Proyectos/Proyecto17/imagen_responsive.jpg",
          "Media/Proyectos/Proyecto17/imagen_responsive_iphoneSE.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionAcademica_BigData_IA.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionAcademica_Developer.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionAcademica_SoporteIT.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones_2.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones_3.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones_4.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionExperiencia_Developer.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionExperiencia_SoporteIT.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos_VentanaEmergente_1.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos_VentanaEmergente_captura2.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos_VentanaEmergente_imagenAmpliada.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionRecomendaciones.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionTecnologias_captura1.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionTecnologias_captura2.jpg"
        ],
        skills: [
            "Diseño de experiencia de usuario (UX) y interfaz de usuario (UI)",
            "Resolución de problemas",
            "Desarrollo front end",
            "Desarrollo de software",
            "Programación",
            "Gestión documental",
            "JavaScript",
            "CSS3",
            "Liderazgo",
            "Administración de sistemas y servidores",
            "Microsoft Visual Studio Code",
            "Analítico y algorítmico",
            "Gestión y documentación de proyectos",
            "HTML5",
            "Metodologías ágiles",
            "Planificación de proyectos",
            "Capacidad de análisis e investigación"
        ],
        links: {
            github: "https://github.com/jherraizsoler/portfolio",
            linkedin: "https://lnkd.in/p/d87i8hnh"
        }
  },

  // Ingles
  "1_en": {
    title: "FullStack App Desktop Task System Project",
    content: `
        <h3>Project Description</h3>
        <p>This project is a **Full-Stack desktop** application designed for comprehensive task management. It combines a robust backend with a modern, native user interface to provide a fluid and efficient experience. Its objective is to offer a complete tool for performing **CRUD** operations (Create, Read, Update, and Delete).</p>
        
        <h4>Backend: The System's Core</h4>
        <p>The backend is developed with **Spring Boot** and **Spring Framework**, ensuring a solid architecture. It uses **JPA** (Java Persistence API) for persistence, with information stored in a **MySQL** database. The integration of **Lombok** optimizes the code and reduces verbosity for more agile development.</p>
        
        <h4>Frontend: Modern User Experience</h4>
        <p>The frontend is built with **JavaFX**, a library for creating desktop user interfaces. This choice allows for designing a modern, native UX/UI that integrates seamlessly with the user's operating system.</p>
        
        <h4>Integration and Full Functionality</h4>
        <p>The project is a true Full-Stack system, where the frontend communicates with the Spring Boot backend through a **RESTful API**. This separation of responsibilities allows each layer to be developed independently.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto1/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto1/ventanaPrincipal_1.jpeg",
    ],
    skills: [
      "JavaFX",
      "Spring Framework",
      "MySQL",
      "Programación",
      "Maven",
      "JPA",
      "Spring Boot",
      "Lombok",
      "Gestión de proyectos",
      "Metodologías ágiles",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/tareas_JavaFX-SpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363223176245370881-Sg4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "2_en": {
    title: "FullStack App Web People System Project",
    content: `
        <h3>Project Description</h3>
        <p>I developed a complete people management system, applying a **full-stack approach with Jakarta EE technologies**. The project is built on a robust architecture, using a modern and enterprise-grade stack ideal for business applications.</p>
        
        <h4>Presentation Layer</h4>
        <p>I designed and developed the user interface with **Jakarta Server Faces (JSF)**, enhanced with the **PrimeFaces** component library for an interactive and responsive web experience.</p>
        
        <h4>Business Logic and Persistence</h4>
        <p>The business logic is implemented securely and transactionally with **Enterprise JavaBeans (EJB)**, while data persistence is managed with **Jakarta Persistence API (JPA)** and **EclipseLink** for efficient ORM mapping to a **MySQL** database. The deployment was carried out on a **GlassFish 8.0.0** server.</p>
        
        <h4>Security and Modularity</h4>
        <p>The system includes a security module with user roles (admin, user, guest), ensuring controlled access to functionalities. This project demonstrates a solid understanding of enterprise software development best practices, including the separation of concerns and code modularity, which makes it an easily scalable and maintainable project.</p>
        
        <h4>Documentation</h4>
        <p>The project includes installation and configuration manuals in the README.md section, and the documentation package contains everything necessary and the requirements to test the project in **Netbeans**.</p>
    `,
    images: [
      "Media/Proyectos/Proyecto2/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto2/Pantalla_EditarPersona.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_EliminarPersona.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_ListadoPersonas.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_Login_Usuario_es_admin o user_Contraseña_es_123_.jpg",
      "Media/Proyectos/Proyecto2/Pantalla_Principal_User_.jpg",
    ],
    skills: [
      "Jakarta EE",
      "MySQL",
      "GlassFish",
      "Jakarta JWS",
      "PrimeFaces",
      "Maven",
      "EJB",
      "SLF4J",
      "JPA",
      "EclipseLink",
      "Java",
      "Gestión y documentación de proyectos",
      "HTML5",
      "Metodologías ágiles",
      "Apache Netbeans IDE",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-ejb-jee-web",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364310370116583424-1ZNv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "3_en": {
    title: "FullStack App Web Contact System Project",
    content: `
        <h3>Project Description</h3>
        <p>I developed a complete and functional **Contact Management System**, designed for efficient information administration. This full-stack project allowed me to apply my knowledge in web application development, from data persistence to the user interface, using a modern and robust technology stack.</p>
        
        <h4>CRUD Functionality</h4>
        <p>The heart of the application is the **CRUD (Create, Read, Update, Delete)** functionality, which allows users to manage their contacts intuitively and securely. Each operation is validated to ensure data integrity.</p>
        
        <h4>Backend Technologies</h4>
        <p>On the backend, I used **Java with Spring Boot 3.5.3**, creating a scalable and high-performance system. For the persistence layer, I integrated **Spring Data JPA** with a **MySQL** database, which simplified data interaction. Dependency management was handled by **Maven**, and the integration of **Lombok** helped me maintain clean and concise code.</p>
        
        <h4>User Interface</h4>
        <p>The user interface was built with **Thymeleaf**, a template engine that integrates perfectly with Spring. This allowed me to develop a fluid user experience and generate dynamic server-side views.</p>
        
        <p>In summary, this project is a concrete proof of my skills as a full-stack developer, demonstrating my ability to build complete and practical solutions that solve real-world problems.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto3/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto3/Pantalla_AgregarContactol.jpg",
      "Media/Proyectos/Proyecto3/Pantalla_EditarContacto.jpg",
      "Media/Proyectos/Proyecto3/Pantalla_principal.jpg",
    ],
    skills: [
      "Spring Framework",
      "MySQL",
      "Thymeleaf",
      "Programación",
      "Maven",
      "JPA",
      "Administración de sistemas y servidores",
      "CSS Responsive",
      "SASS",
      "Flexbox",
      "Grid",
      "Bootstrap",
      "Spring Boot",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/contactos_Thymeleaf-SpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363947996163510272-Z__I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "4_en": {
    title: "FullStack App Web Employee System Project",
    content: `
        <h3>Project Description</h3>
        <p>I developed an **Employee Management System**, a robust and scalable web application built with **Spring Boot**. The application allows for performing **complete CRUD operations** (Create, Read, Update, Delete) on employee information, providing a comprehensive solution for data management.</p>
        
        <h4>Architecture and Technologies</h4>
        <p>The project is designed with a clear architecture, using **Java** as the main language. The backend is supported by the **Spring** ecosystem, with **JPA** and **Hibernate** for managing data persistence in a **MySQL** database. On the frontend, **JSP** and **JSTL** were used to create a dynamic and intuitive user interface, ensuring a fluid user experience.</p>
        
        <h4>Productivity and Maintainability</h4>
        <p>To optimize the code and improve productivity, the **Lombok** library was integrated, significantly reducing repetitive boilerplate code. This project highlights my ability to work with a complete technology stack (Java, Spring Boot, JPA, Hibernate, MySQL, JSP, JSTL, Maven), demonstrating experience in developing functional and maintainable enterprise web applications.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto4/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto4/Pantalla_agregarEmpleado.jpg",
      "Media/Proyectos/Proyecto4/Pantalla_editarEmpleado.jpg",
      "Media/Proyectos/Proyecto4/Pantalla_principal.jpg",
    ],

    skills: [
      "JSTL",
      "Tomcat",
      "Spring Framework",
      "Hibernate",
      "MySQL",
      "Programación",
      "Maven",
      "JPA",
      "Spring Boot",
      "Gestión y documentación de proyectos",
      "JSP",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
    ],
    links: {
      github: "https://github.com/jherraizsoler/empleados_JavaJSP-SpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364234844140109825-Z7zG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "5_en": {
    title: "Proyecto Frontend App Web Sistema de Presupuestos",
    content: `
        <h3>Project Description</h3>
        <p>I developed this personal project, a comprehensive and robust solution for **financial management**, built from scratch with the **Angular 18** framework. The application allows users to manage and calculate budgets in an intuitive and efficient manner, providing total control over their personal or professional finances. Its design focused on offering a fluid and seamless user experience, with an emphasis on ease of use.</p>

        <h4>Design and Architecture</h4>
        <p>The user interface was designed with **Bootstrap 5** and **Bootstrap Icons**, creating a modern and responsive design. A **modular component architecture** was implemented, which ensures code reusability and facilitates long-term maintenance and scalability.</p>

        <h4>Functionalities and Tools</h4>
        <ul>
            <li>For **asynchronous data management** and performance optimization, **RxJS** was used.</li>
            <li>For data capture, a combination of **Reactive Forms** and **Template Driven Forms** was used, demonstrating my versatility and deep knowledge of Angular's capabilities.</li>
            <li>The project also includes **dynamic navigation** with **Angular Router**, ensuring a fluid user experience without page reloads.</li>
            <li>Key components such as the header, income, and expense were developed independently, highlighting an approach focused on the **separation of responsibilities** and code organization.</li>
        </ul>

        <p>In summary, this budget system is a tangible reflection of my skills as a **front-end** developer. It shows my mastery of **TypeScript** and **Angular**, my commitment to industry best practices, and my ability to turn a concept into a functional and high-quality application.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto5/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto5/Ventana_principal.jpg",
    ], // Agrega las rutas a tus imágenes si las tienes, por ejemplo: ['Media/proyectos/Proyecto5/imagenPrincipal.jpeg']
    skills: [
      "Angular",
      "Desarrollo front end",
      "Programación",
      "Administración de sistemas y servidores",
      "Microsoft Visual Studio Code",
      "CSS Responsive",
      "SASS",
      "Flexbox",
      "Grid",
      "Bootstrap",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "HTML5",
      "Metodologías ágiles",
      "Angular CLI",
      "TypeScript",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/appPresupuesto_angular",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363842300013142016-hAWD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "6_en": {
    title: "FullStack App Web People Systems Project",
    content: `
        <h3>Project Description</h3>
        <p>This project is a complete enterprise management web application designed for the efficient administration of people. Developed with the **Jakarta EE** ecosystem, it implements a robust **MVC** architecture, which ensures scalable code and a clear separation of responsibilities.</p>

        <h4>Architecture and Technologies</h4>
        <p>The application integrates **CDI dependency injection** for a decoupled design and uses **JPA** (with **EclipseLink**) for the persistence layer, managing **CRUD** operations on a **MySQL** database. On the frontend, **JavaServer Faces (JSF)** is used in combination with the **PrimeFaces** component library, providing a rich, modern, and highly interactive user interface.</p>

        <h4>Deployment and Management</h4>
        <p>The project is managed with **Maven** and deployed on a **GlassFish** server. This experience has allowed me to consolidate my knowledge in full-stack application development and has provided me with a solid understanding of enterprise Java technologies.</p>

        <h4>Key Technologies</h4>
        <ul>
            <li><strong>Backend:</strong> Java, Jakarta EE, EJB, JPA, EclipseLink, CDI</li>
            <li><strong>Frontend:</strong> JSF, PrimeFaces</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Server:</strong> GlassFish Server</li>
            <li><strong>Dependency Manager:</strong> Maven</li>
        </ul>
    `,
    images: [
      "Media/Proyectos/Proyecto6/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto6/Pantalla_AgregarPersona.jpg",
      "Media/Proyectos/Proyecto6/Pantalla_ListadoPersonas.jpg",
      "Media/Proyectos/Proyecto6/Pantalla_principal.jpg",
      "Media/Proyectos/Proyecto6/Pantalla_SeleccionPersona_EditarPersona.jpg",
    ],
    skills: [
      "Jakarta EE",
      "MySQL",
      "Programación",
      "PrimeFaces",
      "Maven",
      "Enterprise JavaBeans",
      "JPA",
      "EclipseLink",
      "Java",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Apache Netbeans IDE",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-jee-primefaces-web",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364310370116583424-1ZNv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "7_en": {
    title:
      "FullStack GymFlow: Comprehensive Client Management System for Gyms Project",
    content: `
        <h3>Project Description</h3>
        <p><strong>GymFlow</strong> is a full-stack software solution designed to optimize administrative operations in gyms and fitness centers. This project combines a robust backend architecture with multiple user interfaces, demonstrating versatility in creating both desktop and web applications.</p>

        <h4>Backend and Database</h4>
        <p>The backend was developed using **Java** with the **Spring Boot** framework. Data persistence is managed with **JPA**, mapping client information to a **MySQL** database. The **Lombok** library was integrated to reduce boilerplate code. The embedded **Tomcat** web server is responsible for serving the web application and managing HTTP requests.</p>

        <h4>User Interfaces (Frontend)</h4>
        <p>The project's frontend is exceptionally versatile, offering two types of interfaces:</p>
        <ul>
            <li><strong>Desktop Application:</strong> Developed with **Java Swing** and **Console**, ideal for local and quick use by administrative staff.</li>
            <li><strong>Web Application:</strong> Built with **JSF (JavaServer Faces)** and the **PrimeFaces** library, which provides interactive components and a modern UX/UI, accessible from any browser.</li>
        </ul>

        <p>This project highlights my skills in full-stack software development, database management, and the creation of functional and elegant user interfaces in both desktop and web environments.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto7/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_AgregarCliente_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_BuscarClientePorID_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_EliminarCliente_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_ListadoDatos_Console.jpg",
      "Media/Proyectos/Proyecto7/MenuPrincipal_Salir_Console.jpg",
      "Media/Proyectos/Proyecto7/PantallaPrincipal_DatosGuardados_Swing_GUI_DESKTOP.jpg",
      "Media/Proyectos/Proyecto7/PantallaPrincipal_DatosSeleccionados_Swing_GUI_DESKTOP.jpg",
      "Media/Proyectos/Proyecto7/PantallaPrincipal_Swing_GUI_DESKTOP.jpg",
    ],
    skills: [
      "Spring Framework",
      "Programación",
      "Maven",
      "Java Swing",
      "Administración de sistemas y servidores",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Apache Netbeans IDE",
      "Console",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github:
        "https://github.com/jherraizsoler/GymFlow_ZonaFitConsoleSwingWebSpringBoot",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_me-alegra-compartir-que-he-trabajado-en-este-activity-7363479906225209344-u4JU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "8_en": {
    title: "Backend People System Project",
    content: `
        <h3>Project Description</h3>
        <p>The **personas-backend-java** project is a **RESTful** web service that acts as the application's backbone. It is built with the **Jakarta EE** standard and runs on a **GlassFish** server. Its primary purpose is to manage the business logic and data persistence related to people's information.</p>

        <h4>Functionalities and Architecture</h4>
        <p>This backend exposes a **REST API** that allows client applications, such as the **personas-frontend-angular**, to perform **CRUD** (Create, Read, Update, Delete) operations on the information. Using the **HTTP** protocol, clients can send and receive data in **JSON** format to interact with the database.</p>

        <p>The project is responsible for communication with the database, processing requests, and data validation, ensuring the integrity and consistency of the information. Its modular and decoupled design allows any frontend to consume its services, guaranteeing a flexible and scalable architecture.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto8/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto8/Postmanjpg.jpg",
    ],
    skills: [
      "Jakarta EE",
      "Programación",
      "GlassFish",
      "Maven",
      "JPA",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
      "Capacidad de análisis e investigación.",
      "MySQL",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-backend-java",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364672707344408576-6zC2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "9_en": {
    title: "Backend Product Inventory System Project",
    content: `
        <h3>Project Description</h3>
        <p>This project is a robust and scalable **backend** solution designed for the complete and automated management of product inventory. The system is built around a **RESTful API** that acts as the central engine, enabling efficient communication with any user interface (web, mobile, or desktop).</p>

        <h4>Key Features</h4>
        <ul>
            <li>**Real-Time Inventory Management:** Tracks stock levels, records entries and exits, and sends automatic notifications to alert about low stock.</li>
            <li>**Security and Authentication:** An authentication and authorization system ensures that only authorized personnel can access the database.</li>
            <li>**Database Integration:** Connects to a relational or non-relational database for secure and persistent data storage, optimized for fast queries.</li>
            <li>**Reports and Analytics:** Functionality to generate detailed reports on stock status, movement history, and product performance metrics.</li>
        </ul>

        <h4>Architecture and Technologies</h4>
        <p>The core of this project focuses on product management operations, facilitating **CRUD** (Create, Read, Update, and Delete) functions. The system's architecture is designed to be modular and extensible, allowing for easy integration with other platforms, such as point of sale (POS) systems or e-commerce stores.</p>
        `,
    images: [ "Media/Proyectos/Proyecto9/imagenPrincipal.jpeg" ], // Agrega las rutas a tus imágenes si las tienes
    skills: [
      "Spring Framework",
      "MySQL",
      "Programación",
      "Maven",
      "JPA",
      "Java",
      "Spring Boot",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Lombok",
    ],
    links: {
      github: "https://github.com/jherraizsoler/inventarios_springboot_backend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364567005435183106-GUO_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "10_en": {
    title: "Backend HR Employee System Project",
    content: `
        <h3>Project Description</h3>
        <p>This backend project is a human resources management system that implements a **REST API** to manage employee information. Its main objective is to offer a robust and efficient solution for performing **CRUD** (Create, Read, Update, Delete) operations on employee records. The architecture is designed to be modular and easy for a frontend to consume.</p>

        <h4>Key Technologies</h4>
        <p>Development is done with **Spring Boot**, which simplifies the configuration and startup of Java applications. For the persistence layer, **JPA** (with **Hibernate**) is used, which facilitates interaction with a **MySQL** database by mapping Java objects to relational tables. Connectivity is handled through **JDBC**.</p>
        <p>To reduce boilerplate code, the **Lombok** library is integrated, which improves code readability and productivity.</p>

        <h4>Functionality and API</h4>
        <p>The backend exposes a **RESTful API** that allows for complete management of employee data, providing the following endpoints:</p>
        <ul>
            <li>**Create:** To register a new employee.</li>
            <li>**Read:** To query an employee by their ID or retrieve a complete list.</li>
            <li>**Update:** To modify an existing employee's data.</li>
            <li>**Delete:** To remove an employee record.</li>
        </ul>
        <p>This API structure decouples the backend from the frontend, allowing client applications like those built with React or Angular to connect and manage data in a fluid and efficient manner.</p>
        `,
    images: [ "Media/Proyectos/Proyecto10/imagenPrincipal.jpeg" ],
    skills: [
      "Spring Framework",
      "MySQL",
      "Java Database Connectivity (JDBC)",
      "Programación",
      "Maven",
      "Administración de sistemas y servidores",
      "Spring Boot",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/rh_springboot_backend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363117473442729984-SFbf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "11_en": {
    title: "Frontend App Web People Systems Project",
    content: `
        <h3>Project Description</h3>
        <p>The **personas-frontend-angular** project is a **Single-Page Application (SPA)**, developed as the presentation layer of a data management system. The main objective was to build a fluid, high-performance user interface with no page reloads. The development is based on **Angular 19.2.0**, a robust and modular framework ideal for scalable applications.</p>

        <h4>Technologies and Methodologies</h4>
        <p>The use of **TypeScript** was key to the project's success, as its static typing system improves code reliability and readability. The **Angular CLI** was an essential tool for productivity, automating component generation and simplifying compilation tasks.</p>

        <h4>Functionalities and Performance</h4>
        <p>For efficient management of asynchronous operations, the project uses **RxJS** and "observables," which ensures the user interface remains fluid. The main functionality is focused on providing a complete interface for **CRUD** (Create, Read, Update, and Delete) operations on the "person" entity. Each of these functionalities is built with reusable components, facilitating scalability.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto11/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto11/pantalla_principal.jpg",
      "Media/Proyectos/Proyecto11/pantalla_principal_seleccion_a_una_persona.jpg",
    ],
    skills: [
      "Angular",
      "Programación",
      "Administración de sistemas y servidores",
      "Microsoft Visual Studio Code",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Angular CLI",
      "API de Postman",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personas-frontend-angular",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_me-alegra-compartir-que-he-trabajado-en-este-activity-7363585596990066688-W4p-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "12_en": {
    title: "Frontend Product Inventory System Project",
    content: `
        <h3>Project Description</h3>
        <p>This project represents the user interface (**frontend**) for a product inventory system, designed to be intuitive and reactive. Its main objective is to provide a fluid and efficient user experience for product management, using data provided by the backend's RESTful API.</p>

        <p>The frontend is developed with **Angular** to build a **Single-Page Application (SPA)**, which ensures quick transitions and dynamic interaction without constant reloads, significantly improving usability.</p>

        <h4>Key Interface Features</h4>
        <ul>
            <li>**Product Management:** A dedicated module with forms to add, edit, and delete products. Client-side validations ensure that data is correct before being sent.</li>
            <li>**Responsive Design:** The interface adapts to different screen sizes, allowing for optimal use on desktops and mobile devices, ensuring accessibility and flexibility.</li>
            <li>**Error and Notification Handling:** A visual notification system that informs the user about the success of operations or any errors, providing clear and timely feedback.</li>
        </ul>

        <p>In short, this frontend is the visible face of the inventory application, a vital component that translates the complex logic of the backend into an accessible and powerful tool for end-users.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto12/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto12/Pantalla_principal.jpg",
      "Media/Proyectos/Proyecto12/Pantalla_AgregarProducto.jpg",
      "Media/Proyectos/Proyecto12/Pantalla_EditarProducto.jpg",
    ],
    skills: [
      "Angular",
      "Programación",
      "Microsoft Visual Studio Code",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Angular CLI",
      "TypeScript",
      "Planificación de proyectos",
    ],
    links: {
      github:
        "https://github.com/jherraizsoler/inventario-app_angular_frontend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7364597242957074435-43O7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "13_en": {
    title: "Frontend App Web HR Employee System Project",
    content: `
        <h3>Project Description</h3>
        <p>This frontend project is the user interface for a human resources management system. Built as a **Single-Page Application (SPA)**, its purpose is to offer an intuitive experience for performing **CRUD** (Create, Read, Update, Delete) operations on employees, interacting directly with a backend API.</p>

        <h4>Key Technologies</h4>
        <ul>
            <li>The user interface is developed with **React**, and navigation is managed with **react-router-dom**.</li>
            <li>Communication with the backend (the Spring Boot API) is handled with **axios**, an HTTP client library based on promises.</li>
            <li>**react-number-format** is used to ensure that the input of numerical data, such as salary, is handled and displayed correctly, improving form usability.</li>
        </ul>

        <h4>Functionality and User Experience</h4>
        <p>The application provides a complete experience for employee management, including:</p>
        <ul>
            <li>**Main Page:** Displays a list of all employees.</li>
            <li>**Creation and Edition Forms:** Allow adding new employees or modifying data of existing ones.</li>
            <li>**Data Management:** Data is obtained from the backend via API calls, and any changes made are sent to the server for persistence.</li>
        </ul>
        <p>This structure separates the user interface logic from the business logic, which makes development more scalable and easier to maintain.</p>
        `,
    images: [
      "Media/Proyectos/Proyecto13/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto13/pantalla_principal.jpg",
      "Media/Proyectos/Proyecto13/pantalla_AgregarEmpleado.jpg",
      "Media/Proyectos/Proyecto13/pantalla_EditarEmpleado.jpg",
    ],
    skills: [
      "Programación",
      "Administración de sistemas y servidores",
      "React",
      "Microsoft Visual Studio Code",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/rh_app_react_frontend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7363147659655757824-1Srn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "14_en": {
    title: "Backend API RESTFull Zafra Retail Project",
    content: `
       <h3>Project Description</h3>
        <p>This is a **RESTful API** developed with **.NET 8**, intended as the technological foundation for the internal and operational management of Zafra, a multinational fashion company. The API serves as a centralized system to manage all company resources, from the supply chain to store management.</p>

        <h4>Architecture and Functionalities</h4>
        <p>The backend's architecture is based on **Clean Architecture**, ensuring modular, maintainable, and scalable code. It uses **Entity Framework Core** for data persistence in a **SQL Server** database. The API provides a set of endpoints designed to empower internal teams with the following functionalities:</p>
        <ul>
            <li>**Inventory and Stock Management:** Real-time stock control with visibility across warehouses and stores.</li>
            <li>**Store and Warehouse Administration:** Management of information for branches and warehouse locations.</li>
            <li>**Staff and Roles Management:** Administration of users and permissions.</li>
            <li>**Catalog Management:** Administration of brands, categories, and collections.</li>
            <li>**Report Generation:** Endpoints for obtaining critical data for decision-making.</li>
        </ul>

        <p>This backend is the digital backbone of Zafra, enabling unified and efficient internal management and providing the necessary infrastructure for its growth.</p>
        `,
    images: [ "Media/Proyectos/Proyecto14/imagenPrincipal.jpeg" ],
    skills: [
      "C#",
      "Diseño de experiencia de usuario (UX) y interfaz de usuario (UI)",
      "Resolución de problemas",
      ".NET Framework",
      "Desarrollo web back end",
      "Desarrollo de software",
      "Inglés",
      "Programación",
      "Maven",
      "Liderazgo",
      "Administración de sistemas y servidores",
      "ASP.NET MVC",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Entity Framework (EF) Core",
      "Planificación de proyectos",
      "Diseño y administración de bases de datos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/RetailApp.Backend",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_me-alegra-compartir-que-estoy-trabajado-en-activity-7356720798738329600-0MyI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "15_en": {
    title: "FullStack Mobile App PersonalHub Project",
    content: `
        <h3>Project Description</h3>
        <p>I developed **PersonalHubApp**, a mobile application in **Kotlin** and **Jetpack Compose** that serves as a personal management hub. This individual project has allowed me to delve into native Android development, focusing on architecture, data persistence, and security.</p>

        <h4>Key Features and Technologies</h4>
        <ul>
            <li>**Technologies:** I used **Kotlin** for the application's logic and **Jetpack Compose** to build the UI in a declarative and fluid manner.</li>
            <li>**Data Persistence:** Information is stored locally in **JSON** files, offering flexibility without depending on a constant connection.</li>
        </ul>

        <h4>Security and Features in Development</h4>
        <p>I am implementing a file encryption system to protect data confidentiality. For authentication, a login system with a username and password validated against a **MongoDB** database is being developed, with a biometric authentication option for faster access.</p>

        <p>The project is focused on implementing functional sections such as Health, Study, Finance, and Productivity:</p>
        <ul>
            <li>**Health:** Will include a pill tracker with notifications and the ability to view records in a list or on a calendar.</li>
            <li>**Study:** Will feature a Pomodoro timer that will record and display hours, sessions, and breaks by day, week, month, and year.</li>
        </ul>
    
        `,
    images: [
      "Media/Proyectos/Proyecto15/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto15/1.png",
      "Media/Proyectos/Proyecto15/2.png",
      "Media/Proyectos/Proyecto15/3.png",
      "Media/Proyectos/Proyecto15/4.png",
      "Media/Proyectos/Proyecto15/5.png",
      "Media/Proyectos/Proyecto15/6.png",
      "Media/Proyectos/Proyecto15/7.png",
      "Media/Proyectos/Proyecto15/8.png",
      "Media/Proyectos/Proyecto15/9.png",
      "Media/Proyectos/Proyecto15/10.png",
      "Media/Proyectos/Proyecto15/11.png",
      "Media/Proyectos/Proyecto15/12.png",
    ],
    skills: [
      "Programación",
      "Maven",
      "JSON",
      "Android",
      "JetPack Compose",
      "biometric",
      "Administración de sistemas y servidores",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Kotlin",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación.",
    ],
    links: {
      github: "https://github.com/jherraizsoler/personalHubAPP",
      linkedin:
        "https://www.linkedin.com/posts/jorge-herraiz-soler-25679725b_nuevoproyecto-activity-7360397052524003328-unj1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACjaIB6DsKY_IcuDUqisiL9oD5WELnCHk",
    },
  },
  "16_en": {
    title:
      "FullStack Web App Project ShopFlow - Comprehensive Store Management",
    content: `
              <h3>Project Description</h3>
              <p>This project is a complete **Full-Stack** application designed for comprehensive store management. It provides a robust and scalable solution to manage products, sales, inventory, and employees, with an intuitive user interface optimized for productivity.</p>

              <h4>Backend: The System's Core</h4>
              <p>The backend is built on a modern and efficient framework that ensures a solid and modular architecture. A **RESTful API** is used for fluid communication with the frontend, allowing for the separation of responsibilities and independent development of each layer.</p>

              <h4>Frontend: Modern User Experience</h4>
              <p>The frontend is developed with technologies that allow for the creation of a modern and responsive user experience (UX/UI). The interface is designed to be intuitive, facilitating navigation and access to all the system's functionalities.</p>

              <h4>Integration and Complete Functionality</h4>
              <p>ShopFlow is a true **Full-Stack** system that integrates all the necessary functionalities for store management, from sales registration to inventory control and employee administration, ensuring that the frontend and backend work in harmony.</p>
             `,
    images: [
      "Media/Proyectos/Proyecto16/imagenPrincipal.jpeg",
      "Media/Proyectos/Proyecto16/imagen0.jpeg",
      "Media/Proyectos/Proyecto16/imagen1.jpeg",
      "Media/Proyectos/Proyecto16/imagen2.jpeg",
      "Media/Proyectos/Proyecto16/imagen3.jpeg",
    ],
    skills: [
      "Angular",
      "Programación",
      "Administración de sistemas y servidores",
      "Microsoft Visual Studio Code",
      "Analítico y algorítmico",
      "Gestión y documentación de proyectos",
      "Metodologías ágiles",
      "Angular CLI",
      "API de Postman",
      "Planificación de proyectos",
      "Capacidad de análisis e investigación",
    ],
    links: {
      github: "https://github.com/jherraizsoler/ShopFlow_ControlTiendas",
      linkedin: "https://lnkd.in/p/dxk_Axrc",
    },
  },
   "17_en": {
        title: "Frontend Project Portfolio Jorge Herraiz Soler",
        content: "I am building my portfolio from scratch, materializing my ideas of the portfolio I would like to have, what the first impressions are, and taking care of the content. I want to create a portfolio that shows who I am, what I do, what my initiative is, my path, what my values are, principles, and attention to detail. I like to show in the portfolio the enjoyment and constant study that I have been developing for 3 years, focusing on the IT sector. Technologies used: - HTML5 - CSS3 - JavaScript - Shoelace-style for some components for Academic and Experience sections New learnings, elements or components: - Static Nav, white left-side component with guide buttons for the portfolio (clip-path) - Static Footer (z-index) - Circle radius blur filter cursor, Design and UX/UI - Language Change Button / Translator mode component English and Spanish - Dark / Light Mode Button / Visibility / color mode component - PopUps / Pop-up windows Show more information about the projects - Improved Academic section - Improved Experience section - Improved Projects section - Updated Courses and Certifications section - Implemented and improved Technologies section - Implemented and improved Recommendations section Last updated 19/09/2025 @jherraizsoler",
        images: [
          "Media/Proyectos/Proyecto17/imagenPrincipal.jpg",
          "Media/Proyectos/Proyecto17/imagenPrincipal_componenteAbierto.jpg",
          "Media/Proyectos/Proyecto17/imagen_Internalización_Ingles_Español.jpg",
          "Media/Proyectos/Proyecto17/imagen_mode_Dark.jpg",
          "Media/Proyectos/Proyecto17/imagen_mode_Light.jpg",
          "Media/Proyectos/Proyecto17/imagen_responsive.jpg",
          "Media/Proyectos/Proyecto17/imagen_responsive_¡phoneSE.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionAcademica_BigData_IA.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionAcademica_Developer.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionAcademica_SoporteIT.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones_2.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones_3.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionCursosCertificaciones_4.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionExperiencia_Developer.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionExperiencia_SoporteIT.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos_VentanaEmergente_1.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos_VentanaEmergente_captura2.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionProyectos_VentanaEmergente_imagenAmpliada.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionRecomendaciones.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionTecnologias_captura1.jpg",
          "Media/Proyectos/Proyecto17/imagen_SeccionTecnologias_captura2.jpg"
        ],
        skills: [
            "User Experience (UX) and User Interface (UI) Design",
            "Problem Solving",
            "Front-end Development",
            "Software Development",
            "Programming",
            "Document Management",
            "JavaScript",
            "CSS3",
            "Leadership",
            "Systems and Server Administration",
            "Microsoft Visual Studio Code",
            "Analytical and Algorithmic",
            "Project Management and Documentation",
            "HTML5",
            "Agile Methodologies",
            "Project Planning",
            "Analytical and Research Skills"
        ],
        links: {
            github: "https://github.com/jherraizsoler/portfolio",
            linkedin: "https://lnkd.in/p/d87i8hnh"
        }
    }
 };



// 2. Referencias a los elementos del DOM (se agrega el visor de imágenes)
const articlesContainer = document.getElementById("contenedorArticulos");
const modalContainer = document.getElementById("modal-container");
const modalContent = modalContainer.querySelector(".modal");

// Visor de imágenes a pantalla completa
const fullscreenImageViewer = document.getElementById(
  "fullscreen-image-viewer"
);
const fullscreenImage = document.getElementById("fullscreen-image");
let isZoomed = false;
let isDragging = false;
let startX, startY, currentX, currentY;
let imageX = 0,
  imageY = 0;

// 3. Manejador de eventos para abrir el modal
articlesContainer.addEventListener("click", (event) =>
{
  const projectCard = event.target.closest(".project-card");

  if (projectCard)
  {
    const projectId = projectCard.getAttribute("data-project-id");
    const projectData = projectsData[ projectId ];

    if (projectData)
    {
      let contentHTML = "";

      // Lógica para la imagen principal y las adjuntas
      if (projectData.images && projectData.images.length > 0)
      {
        contentHTML += `
          <div class="modal-image-top">
            <img src="${projectData.images[ 0 ]}" alt="${projectData.title}" class="modal-project-image">
          </div>`;
      }

      contentHTML += `<h2>${projectData.title}</h2>`;
      contentHTML += `<div class="modal-body">${projectData.content}</div>`;

      // Añade los "chips" de aptitudes si existen
      if (projectData.skills && projectData.skills.length > 0)
      {
        const lang = projectId.includes("_en") ? "en" : "es";

        if (lang === "es")
        {
          contentHTML += `<h4>Aptitudes Clave</h4>`;
        } else
        {
          contentHTML += `<h4>Key Skills</h4>`;
        }

        contentHTML += `<div class="project-skills">`;
        projectData.skills.forEach((skill) =>
        {
          contentHTML += `<span class="skill-chip">${skill}</span>`;
        });
        contentHTML += `</div>`;
      }

      // Añade imágenes adjuntas si hay más de una
      if (projectData.images && projectData.images.length > 1)
      {
        contentHTML += `<div class="project-images">`;
        for (let i = 1; i < projectData.images.length; i++)
        {
          contentHTML += `<img src="${projectData.images[ i ]}" alt="${projectData.title}" class="modal-project-image">`;
        }
        contentHTML += `</div>`;
      }

      // Añade los enlaces si existen
      if (projectData.links)
      {
        const lang = projectId.includes("_en") ? "en" : "es";
        contentHTML += `<div class="project-links">`;

        if (projectData.links.github)
        {
          contentHTML += `<a href="${projectData.links.github
            }" target="_blank" class="link-button">${lang === "es" ? "Ver en GitHub" : "View on GitHub"
            }</a>`;
        }

        if (projectData.links.linkedin)
        {
          contentHTML += `<a href="${projectData.links.linkedin
            }" target="_blank" class="link-button">${lang === "es" ? "Ver en LinkedIn" : "View on LinkedIn"
            }</a>`;
        }

        contentHTML += `</div>`;
      }

      contentHTML += `<button class="botonClose" id="close-modal">X</button>`;
      modalContent.innerHTML = contentHTML;
      modalContainer.classList.add("show");
    }
  }
});

// 4. Manejador de eventos para cerrar el modal
modalContainer.addEventListener("click", (event) =>
{
  if (
    event.target.id === "close-modal" ||
    event.target.id === "modal-container"
  )
  {
    modalContainer.classList.remove("show");
  }
});
// Lógica para el visor de imágenes (Sección modificada)
// =======================================================
// **DELEGACIÓN DE EVENTOS**: Escucha en el contenedor del modal
modalContainer.addEventListener("click", (event) =>
{
  if (event.target.classList.contains("modal-project-image"))
  {
    openFullscreenImageViewer(event.target.src);
  }
});

// Evento para cerrar el visor al hacer clic en el fondo
fullscreenImageViewer.addEventListener("click", (event) =>
{
  if (event.target === fullscreenImageViewer)
  {
    closeFullscreenImageViewer();
  }
});

// Evento para hacer zoom/des-zoom al hacer clic en la imagen ampliada
fullscreenImage.addEventListener("click", () =>
{
  isZoomed = !isZoomed;
  fullscreenImage.classList.toggle("zoomed", isZoomed);
  if (!isZoomed)
  {
    // Resetear posición al hacer des-zoom
    imageX = 0;
    imageY = 0;
    fullscreenImage.style.transform = `scale(1) translate(0, 0)`;
  }
});

// Nuevos eventos para el arrastre de la imagen (Pan)
fullscreenImage.addEventListener("mousedown", (e) =>
{
  if (isZoomed)
  {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    e.preventDefault(); // Evita la selección de la imagen al arrastrar
    fullscreenImage.style.cursor = "grabbing";
  }
});

fullscreenImage.addEventListener("mousemove", (e) =>
{
  if (!isDragging) return;

  currentX = e.clientX;
  currentY = e.clientY;

  const deltaX = currentX - startX;
  const deltaY = currentY - startY;

  // Actualiza la posición de la imagen
  imageX += deltaX;
  imageY += deltaY;

  // Aplica la transformación de escala y movimiento
  fullscreenImage.style.transform = `scale(1.5) translate(${imageX}px, ${imageY}px)`;

  startX = currentX;
  startY = currentY;
});

fullscreenImage.addEventListener("mouseup", () =>
{
  isDragging = false;
  fullscreenImage.style.cursor = "grab";
});

fullscreenImageViewer.addEventListener("mouseleave", () =>
{
  isDragging = false;
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", (event) =>
{
  if (
    event.key === "Escape" &&
    fullscreenImageViewer.classList.contains("active")
  )
  {
    closeFullscreenImageViewer();
  }
});

// Funciones del visor
function openFullscreenImageViewer(imageSrc)
{
  fullscreenImage.src = imageSrc;
  fullscreenImageViewer.classList.add("active");
  document.body.style.overflow = "hidden";
  isZoomed = false;
  fullscreenImage.classList.remove("zoomed");
  // Restablecer la posición de la imagen al abrir el visor
  fullscreenImage.style.transform = "scale(1) translate(0, 0)";
  imageX = 0;
  imageY = 0;
}

function closeFullscreenImageViewer()
{
  fullscreenImageViewer.classList.remove("active");
  document.body.style.overflow = "";
}
