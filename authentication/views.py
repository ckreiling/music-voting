from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import permissions, viewsets

from .permissions import IsOwnerOrReadOnly
from .serializers import UserSerializer, GroupSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Read-only model view set for Users; allows admin to look at
    all users in the system
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)


class GroupViewSet(viewsets.ModelViewSet):
    """
    Read-only model view set for Groups; allows admin to
    look at all the Groups
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (permissions.IsAdminUser,)
