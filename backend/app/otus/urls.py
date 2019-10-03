from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from graphene_django.views import GraphQLView


def trigger_error(request):
    raise Exception('Hello Otus')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path("graphql", GraphQLView.as_view(graphiql=True)),
    path('sentry-debug/', trigger_error),
]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]


urlpatterns += [
    path('django-rq/', include('django_rq.urls'))
]
