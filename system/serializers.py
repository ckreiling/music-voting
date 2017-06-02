from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for Django's 'User' class, used in authentication
    """
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for Django's 'Group' class, used to group different
    'User' objects in the system
    """
    class Meta:
        model = Group
        fields = ('url', 'name',)
