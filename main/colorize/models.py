from django.db import models


class Image(models.Model):
    BWImage = models.ImageField(upload_to="bl_images/", null=True, blank=True)
    coloredImage = models.ImageField(upload_to="colored_images/", null=True, blank=True)
    creationDate = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Image"
        verbose_name_plural = "Images"

    def __str__(self):
        return str(self.BWImage)
