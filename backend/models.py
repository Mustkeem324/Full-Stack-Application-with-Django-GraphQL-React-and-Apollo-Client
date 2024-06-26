from django.db import models


class Product(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField()
  price = models.FloatField()
  stock = models.IntegerField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
