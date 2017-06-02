"""music URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.views.generic import TemplateView

urlpatterns = [
    # URL for the React app to be accessed from
    url(r'^', TemplateView.as_view(template_name='index.html')),
    # Main User and Group system route
    url(r'^system/', include('system.urls')),
    # Loads the authentication page properly
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework'))
]
