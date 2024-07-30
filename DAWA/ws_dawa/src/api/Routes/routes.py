from ..Services.login_service import LoginService
from ..Services.user_service import UserService
from ..Services.amigo_service import AmigoService
from ..Services.publicacion_service import PublicacionService
from ..Services.reaccion_service import ReaccionService
from ..Services.comentario_service import ComentarioService


def load_routes(api):
    # Método para el login
    api.add_resource(LoginService, '/security/login')

    # Método para listar los usuarios
    api.add_resource(UserService, '/user/list')

    # Métodos para Amigos
    api.add_resource(AmigoService, '/amigo', methods=['POST'], endpoint='add_friend')
    api.add_resource(AmigoService, '/amigos/<int:user_id>', methods=['GET'], endpoint='get_friends')

    # Métodos para publicaciones
    api.add_resource(PublicacionService, '/publicacion', methods=['POST'], endpoint='create_post')
    api.add_resource(PublicacionService, '/publicaciones/<int:user_id>', methods=['GET'], endpoint='get_posts')

    # Métodos para reacciones
    api.add_resource(ReaccionService, '/reaccion', methods=['POST'], endpoint='add_reaction')

    # Métodos para comentarios
    api.add_resource(ComentarioService, '/comentario', methods=['POST'], endpoint='add_comment')