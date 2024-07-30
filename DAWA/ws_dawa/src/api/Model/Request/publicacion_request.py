from marshmallow import Schema, fields

class PublicacionRequest(Schema):
    user_id = fields.Integer(required=True)
    contenido = fields.String(required=True)