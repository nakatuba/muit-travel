from django.db import models


class DestinationType(models.TextChoices):
    HOKKAIDO = 'HOKKAIDO', 'Hokkaido'
    KANAGAWA = 'KANAGAWA', 'Kanagawa'
    OKINAWA = 'OKINAWA', 'Okinawa'


class EventType(models.TextChoices):
    OUTDOOR = 'OUTDOOR', 'Outdoor'
    INDOOR = 'INDOOR', 'Indoor'
    NATURE = 'NATURE', 'Nature'
    ART = 'ART', 'Art'
    EXPERIENCE = 'EXPERIENCE', 'Experience'
    HOT_SPRING = 'HOT_SPRING', 'HotSpring'
    SHRINES_TEMPLES = 'SHRINES_TEMPLES', 'ShrinesTemples'
    FOOD = 'FOOD', 'Food'
    POWER_SPOT = 'POWER_SPOT', 'PowerSpot'


class InnType(models.TextChoices):
    HOTEL = 'HOTEL', 'Hotel'
    RYOKAN = 'RYOKAN', 'Ryokan'
    DORMITORY = 'DORMITORY', 'Domitory'


class Route(models.Model):
    destination_type = models.CharField(max_length=16, choices=DestinationType.choices)
    event_type = models.CharField(max_length=16, choices=EventType.choices)
    inn_type = models.CharField(max_length=16, choices=InnType.choices)


class Spot(models.Model):
    route = models.ForeignKey(Route, related_name='spots', on_delete=models.CASCADE)
    name = models.CharField(max_length=16)
    time = models.TimeField()
    picture = models.ImageField()
