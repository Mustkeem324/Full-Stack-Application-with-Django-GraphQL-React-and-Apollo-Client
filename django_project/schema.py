import graphene
from graphene_django.types import DjangoObjectType
from backend.models import Product

class ProductType(DjangoObjectType):
    class Meta:
        model = Product

class Query(graphene.ObjectType):
    products = graphene.List(ProductType)

    def resolve_products(self, info, **kwargs):
        return Product.objects.all()

schema = graphene.Schema(query=Query)
