define({ "api": [
  {
    "type": "post",
    "url": "/auth/attempt",
    "title": "Login",
    "name": "attempt",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "6 .. 12",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Devuelve un JWT del usuario autenticado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Informa el tipo de error (validación, repetido, contraseña, parámetros, etc) en el mensaje.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/encuestas",
    "title": "Listado de cuestionarios",
    "name": "all",
    "group": "Cuestionarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cuestionarios",
            "description": "<p>Devuelve un json con los cuestionarios registrados en la base de datos</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cuestionarios"
  },
  {
    "type": "post",
    "url": "/encuestas",
    "title": "Alta de cuestionarios",
    "name": "create",
    "group": "Cuestionarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tema",
            "description": "<p>Tema del cuestionario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "preguntas",
            "description": "<p>Array de preguntas</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID de usuario creador del cuestionario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cuestionario",
            "description": "<p>Devuelve un json con los datos del cuestionario creado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cuestionarios"
  },
  {
    "type": "delete",
    "url": "/encuestas/:id",
    "title": "Baja de cuestionario",
    "name": "delete",
    "group": "Cuestionarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del cuestionario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cuestionario",
            "description": "<p>Devuelve un json con los datos del cuestionario eliminado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cuestionarios"
  },
  {
    "type": "get",
    "url": "/encuestas/:id",
    "title": "Mostrar cuestionario",
    "name": "find",
    "group": "Cuestionarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del cuestionario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cuestionario",
            "description": "<p>Devuelve un json con los datos del cuestionario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cuestionarios"
  },
  {
    "type": "get",
    "url": "/encuestas/user/:id",
    "title": "Listado de cuestionarios por usuario",
    "name": "getByUser",
    "group": "Cuestionarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario creador</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cuestionarios",
            "description": "<p>Devuelve un json con los cuestionarios del usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cuestionarios"
  },
  {
    "type": "put",
    "url": "/encuestas/:id",
    "title": "Modificar cuestionario",
    "name": "update",
    "group": "Cuestionarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del cuestionario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "preguntas",
            "description": "<p>Array de preguntas del cuestionario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cuestionario",
            "description": "<p>Devuelve un json con los datos del cuestionario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cuestionarios"
  },
  {
    "type": "get",
    "url": "/cursos",
    "title": "Listado de cursos",
    "name": "all",
    "group": "Cursos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cursos",
            "description": "<p>Devuelve un json con los registros de cursos</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos/:id",
    "title": "Listado de cursos por usuario",
    "name": "getByUser",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cursos",
            "description": "<p>Devuelve un json con los registros de cursos del usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/domicilios",
    "title": "Listado de domicilios",
    "name": "all",
    "group": "Domicilios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "domicilios",
            "description": "<p>Devuelve un json con los registros de domicilios</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Domicilios"
  },
  {
    "type": "post",
    "url": "/domicilios",
    "title": "Alta de domicilios",
    "name": "create",
    "group": "Domicilios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "latitud",
            "description": "<p>Coordenada latitudinal de la ubicación del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "longitud",
            "description": "<p>Coordenada longitudinal de la ubicación del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "domicilio",
            "description": "<p>Devuelve un json con los datos del registro creado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Domicilios"
  },
  {
    "type": "delete",
    "url": "/domicilios/:id",
    "title": "Baja de domicilio",
    "name": "delete",
    "group": "Domicilios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del registro de domicilio</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "domicilio",
            "description": "<p>Devuelve un json con los datos del registro eliminado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Domicilios"
  },
  {
    "type": "put",
    "url": "/domicilios/:id",
    "title": "Modificar domicilio",
    "name": "update",
    "group": "Domicilios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del registro de domicilio</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "direccion",
            "description": "<p>Direccion del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "latitud",
            "description": "<p>Coordenada latitudinal de la ubicación del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "longitud",
            "description": "<p>Coordenada longitudinal de la ubicación del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "domicilio",
            "description": "<p>Devuelve un json con los datos del registro creado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Domicilios"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Ruta raiz de la API",
    "name": "Home",
    "group": "Home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Devuelve el nombre de la API en caso de haberse instalado y configurado con éxito.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/images/:nombre",
    "title": "Retornar imagen",
    "name": "getImageUploaded",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nombre",
            "description": "<p>identificador único de la imagen subida al servidor.</p>"
          }
        ]
      }
    },
    "group": "Images",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "imagen",
            "description": "<p>Retorna un archivo de imagen subida al servidor.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Images"
  },
  {
    "type": "post",
    "url": "/images",
    "title": "Subir imagen al servidor",
    "name": "uploadUserPhoto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "image",
            "description": "<p>Imagen</p>"
          }
        ]
      }
    },
    "group": "Images",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de estatus de la petición</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Images"
  },
  {
    "type": "delete",
    "url": "/inscripciones",
    "title": "Baja de inscripciones",
    "name": "delete",
    "group": "Inscripciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "cursos",
            "description": "<p>Array de cursos</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "legajo",
            "description": "<p>ID del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inscripcion",
            "description": "<p>Devuelve un json con los registros de inscripcion actualizados</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Inscripciones"
  },
  {
    "type": "post",
    "url": "/inscripciones",
    "title": "Alta de inscripciones",
    "name": "getByUser",
    "group": "Inscripciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "cursos",
            "description": "<p>Array de cursos</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "legajo",
            "description": "<p>ID del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inscripcion",
            "description": "<p>Devuelve un json con los registros de inscripcion</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Inscripciones"
  },
  {
    "type": "get",
    "url": "/materias",
    "title": "Listado de materias",
    "name": "all",
    "group": "Materias",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "materias",
            "description": "<p>Devuelve un json con los registros de materias</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Materias"
  },
  {
    "type": "post",
    "url": "/materias",
    "title": "Alta de materias",
    "name": "create",
    "group": "Materias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la materia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "materia",
            "description": "<p>Devuelve un json con los datos del registro creado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Materias"
  },
  {
    "type": "delete",
    "url": "/materias",
    "title": "Baja de materias",
    "name": "delete",
    "group": "Materias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "materia_id",
            "description": "<p>ID de la materia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "materia",
            "description": "<p>Devuelve un json con los datos del registro eliminado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Materias"
  },
  {
    "type": "get",
    "url": "/materias/:id",
    "title": "Mostrar materia",
    "name": "find",
    "group": "Materias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "materia_id",
            "description": "<p>ID de la materia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "materia",
            "description": "<p>Devuelve un json con los registros de materias</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Materias"
  },
  {
    "type": "get",
    "url": "/preguntas/:id",
    "title": "Listado de preguntas",
    "name": "all",
    "group": "Preguntas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tpreguntasipo",
            "description": "<p>Devuelve un json con los datos de los registros</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Preguntas"
  },
  {
    "type": "post",
    "url": "/preguntas",
    "title": "Alta de preguntas",
    "name": "create",
    "group": "Preguntas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consigna",
            "description": "<p>Texto de la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tipo",
            "description": "<p>ID del tipo de pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cuestionario_id",
            "description": "<p>ID del cuestionario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "opciones",
            "description": "<p>Array con las opciones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "respuestas",
            "description": "<p>Array con la(s) respuesta(s)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pregunta",
            "description": "<p>Devuelve un json con los datos del registro creado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Preguntas"
  },
  {
    "type": "delete",
    "url": "/preguntas/:id",
    "title": "Baja de preguntas",
    "name": "delete",
    "group": "Preguntas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la pregunta</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pregunta",
            "description": "<p>Devuelve un json con los datos del registro eliminado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Preguntas"
  },
  {
    "type": "get",
    "url": "/preguntas/:id",
    "title": "Listado de preguntas",
    "name": "find",
    "group": "Preguntas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la pregunta</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pregunta",
            "description": "<p>Devuelve un json con los datos del registro</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Preguntas"
  },
  {
    "type": "put",
    "url": "/preguntas/:id",
    "title": "Modificar pregunta",
    "name": "update",
    "group": "Preguntas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consigna",
            "description": "<p>Texto de la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tipo",
            "description": "<p>ID del tipo de pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cuestionario_id",
            "description": "<p>ID del cuestionario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "opciones",
            "description": "<p>Array con las opciones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "respuestas",
            "description": "<p>Array con la(s) respuesta(s)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pregunta",
            "description": "<p>Devuelve un json con los datos del registro actualizado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Preguntas"
  },
  {
    "type": "get",
    "url": "/resultados",
    "title": "Listado de resultados",
    "name": "all",
    "group": "Resultados",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "resultados",
            "description": "<p>Devuelve un json con los datos de resultados</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Resultados"
  },
  {
    "type": "post",
    "url": "/resultados",
    "title": "Alta de resultados",
    "name": "create",
    "group": "Resultados",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "preguntas",
            "description": "<p>Array de preguntas</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "resultado",
            "description": "<p>Devuelve un json con los datos del resultado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Resultados"
  },
  {
    "type": "get",
    "url": "/resultados/find",
    "title": "Mostrar resultado de cuestionario",
    "name": "findByEncuestaAndUser",
    "group": "Resultados",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "encuesta_id",
            "description": "<p>ID del cuestionario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "resultado",
            "description": "<p>Devuelve un json con los datos del resultado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Resultados"
  },
  {
    "type": "get",
    "url": "/roles",
    "title": "Listado de roles",
    "name": "all",
    "group": "Roles",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Devuelve un json con los roles y sus usuarios.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Roles"
  },
  {
    "type": "post",
    "url": "/roles",
    "title": "Alta de roles",
    "name": "create",
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del nuevo rol</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rol",
            "description": "<p>Devuelve un json con los datos del registro creado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Roles"
  },
  {
    "type": "delete",
    "url": "/roles/:id",
    "title": "Baja de roles",
    "name": "delete",
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del rol</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rol",
            "description": "<p>Devuelve un json con los datos del registro eliminado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Roles"
  },
  {
    "type": "put",
    "url": "/roles/:id",
    "title": "Modificar roles",
    "name": "update",
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del rol</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del rol</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rol",
            "description": "<p>Devuelve un json con los datos del registro actualizado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/tipos",
    "title": "Listado de tipos de pregunta",
    "name": "all",
    "group": "Tipos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tipos",
            "description": "<p>Devuelve un json con los datos del registros de tipos de pregunta</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Tipos"
  },
  {
    "type": "post",
    "url": "/tipos",
    "title": "Alta de tipos de pregunta",
    "name": "create",
    "group": "Tipos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del tipo de pregunta</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tipo",
            "description": "<p>Devuelve un json con los datos del registro creado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Tipos"
  },
  {
    "type": "delete",
    "url": "/tipos/:id",
    "title": "Elimina tipo de pregunta",
    "name": "delete",
    "group": "Tipos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del registro</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tipo",
            "description": "<p>Devuelve un json con los datos del registro actualizado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Tipos"
  },
  {
    "type": "put",
    "url": "/tipos/:id",
    "title": "Modificar nombre de tipo de pregunta",
    "name": "update",
    "group": "Tipos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del registro</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del tipo de pregunta</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tipo",
            "description": "<p>Devuelve un json con los datos del registro actualizado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa del error específico.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Tipos"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Listado de usuarios",
    "name": "all",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Devuelve un json con los usuarios registrados en la base de datos</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 Informa que no hay usuarios registrados.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Alta de usuarios",
    "name": "create",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "6..12",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "7..8",
            "optional": false,
            "field": "documento",
            "description": "<p>Nro de documento del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fnacimiento",
            "description": "<p>Fecha de nacimiento del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "defaultValue": "m",
            "description": "<p>Sexo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "domicilio",
            "description": "<p>Dirección del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "latitud",
            "description": "<p>Coordenada latitudinal de la ubicación del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "longitud",
            "description": "<p>Coordenada longitudinal de la ubicación del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Devuelve un json con los datos del alta</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Informa el tipo de error (validación, repetido, parámetros, etc) en el mensaje.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Users"
  },
  {
    "type": "delte",
    "url": "/users/:id",
    "title": "Baja de usuario",
    "name": "delete",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Devuelve un json con los datos del usuario eliminado.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 El usuario no existe.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Mostrar usuario.",
    "name": "show",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Devuelve un json con los datos del usuario encontrado.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>404 El usuario no existe.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Modificar usuario",
    "name": "update",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "nombre",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "apellido",
            "description": "<p>Apellido del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>Email del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "6..12",
            "optional": true,
            "field": "password",
            "description": "<p>Password del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "7..8",
            "optional": true,
            "field": "documento",
            "description": "<p>Nro de documento del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "fnacimiento",
            "description": "<p>Fecha de nacimiento del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sexo",
            "description": "<p>Sexo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "domicilio",
            "description": "<p>Dirección del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "latitud",
            "description": "<p>Coordenada latitudinal de la ubicación del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "longitud",
            "description": "<p>Coordenada longitudinal de la ubicación del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Devuelve un json con los datos actualizados del usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Informa el tipo de error (validación, repetido, parámetros, etc) en el mensaje.</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "src/routes.php",
    "groupTitle": "Users"
  }
] });
