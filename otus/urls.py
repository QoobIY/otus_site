from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from graphene_django.views import GraphQLView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path("graphql", GraphQLView.as_view(graphiql=True)),
]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]
