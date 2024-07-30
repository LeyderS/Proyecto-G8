-- GRUPO 8 
-- DAWA 7-1

-- Arias Vélez Luis Romario 
-- Cumbicos Oquendo Leyder Steven 
-- Macias Yumbla Andrea Lissette
-- Quirumbay Guales Neyser Angel

-- Tabla de Usuarios
CREATE TABLE dawa.tb_usuarios (
    user_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
	user_state bool NOT NULL DEFAULT true,
	user_is_locked bool NOT NULL DEFAULT false,
    password VARCHAR(255) NOT NULL
);

-- Tabla de Amigos
CREATE TABLE dawa.tb_amigos (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    amigo_id INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES dawa.tb_usuarios(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_amigo FOREIGN KEY (amigo_id) REFERENCES dawa.tb_usuarios(user_id) ON DELETE CASCADE,
    CONSTRAINT unique_friendship UNIQUE (user_id, amigo_id)
);

-- Tabla de Publicaciones
CREATE TABLE dawa.tb_publicaciones (
    publicacion_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    contenido TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_publicacion FOREIGN KEY (user_id) REFERENCES dawa.tb_usuarios(user_id) ON DELETE CASCADE
);

-- Tabla de Reacciones
CREATE TABLE dawa.tb_reacciones (
    reaccion_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    publicacion_id INT NOT NULL,
    tipo_reaccion VARCHAR(50) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_reaccion FOREIGN KEY (user_id) REFERENCES dawa.tb_usuarios(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_publicacion_reaccion FOREIGN KEY (publicacion_id) REFERENCES dawa.tb_publicaciones(publicacion_id) ON DELETE CASCADE,
    CONSTRAINT unique_reaccion UNIQUE (user_id, publicacion_id, tipo_reaccion)
);

-- Tabla de Comentarios
CREATE TABLE dawa.tb_comentarios (
    comentario_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    publicacion_id INT NOT NULL,
    comentario TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_comentario FOREIGN KEY (user_id) REFERENCES dawa.tb_usuarios(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_publicacion_comentario FOREIGN KEY (publicacion_id) REFERENCES dawa.tb_publicaciones(publicacion_id) ON DELETE CASCADE
);

INSERT INTO dawa.tb_usuarios (user_id, nombre, email, user_state, user_is_locked, password) VALUES 
(2,'Juan Pérez', 'juan.perez@example.com', true, false, md5('password1')),
(3,'María García', 'maria.garcia@example.com', true, false, md5('password2')),
(4,'Carlos López', 'carlos.lopez@example.com', true, false, md5('password3')),
(5,'Ana Martínez', 'ana.martinez@example.com', true, false,md5('password4')),
(6,'Pedro Gómez', 'pedro.gomez@example.com', true, false,md5('password5'));

INSERT INTO dawa.tb_amigos (user_id, amigo_id) VALUES (1, 2);
INSERT INTO dawa.tb_amigos (user_id, amigo_id) VALUES (1, 3);
INSERT INTO dawa.tb_amigos (user_id, amigo_id) VALUES (2, 3);
INSERT INTO dawa.tb_amigos (user_id, amigo_id) VALUES (2, 4);
INSERT INTO dawa.tb_amigos (user_id, amigo_id) VALUES (3, 4);


INSERT INTO dawa.tb_publicaciones (user_id, contenido) VALUES (1, 'Mi primera publicación!');

INSERT INTO dawa.tb_reacciones (user_id, publicacion_id, tipo_reaccion) VALUES (2, 1, 'Me gusta');

INSERT INTO dawa.tb_comentarios (user_id, publicacion_id, comentario) VALUES (2, 1, '¡Felicidades por tu primera publicación!');

