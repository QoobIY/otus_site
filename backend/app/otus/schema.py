import graphene


class Query(containers.django.main.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
