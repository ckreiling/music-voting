from django.conf.urls import url, include
from system import views
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view

# Create router and register viewsets
router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]
