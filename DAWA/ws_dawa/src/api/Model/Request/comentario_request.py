from marshmallow import Schema, fields

class ComentarioRequest(Schema):
    user_id = fields.Integer(required=True)
    publicacion_id = fields.Integer(required=True)
    comentario = fields.String(required=True)
