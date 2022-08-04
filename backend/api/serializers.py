from django.contrib.auth.models import User
from rest_framework import serializers

from .models import DestinationType, EventType, InnType, Route, Spot


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email']


class SpotSerializer(serializers.ModelSerializer):
    route = serializers.PrimaryKeyRelatedField(queryset=Route.objects.all())

    class Meta:
        model = Spot
        fields = ['id', 'route', 'name', 'time', 'picture']


class RouteSerializer(serializers.ModelSerializer):
    spots = SpotSerializer(many=True)

    class Meta:
        model = Route
        fields = ['id', 'destination_type', 'event_type', 'inn_type', 'spots']


class SearchRequestSerializer(serializers.Serializer):
    destination_type = serializers.ChoiceField(
        choices=DestinationType.choices, required=False
    )
    event_type = serializers.ChoiceField(choices=EventType.choices, required=False)
    inn_type = serializers.ChoiceField(choices=InnType.choices, required=False)
