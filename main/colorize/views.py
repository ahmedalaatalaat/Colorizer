from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Image
from .colorize import Colroizer
from os.path import join, dirname


def main(request):
    if request.is_ajax():
        if request.method == 'POST':
            BWImage = request.FILES.get('bw_image')
            imageObj = Image.objects.create(
                BWImage=BWImage
            )

            colorizer = Colroizer(width=imageObj.BWImage.width, height=imageObj.BWImage.height)

            image_name = f'media_root/{imageObj}'
            colored_image = colorizer.processImage(join(dirname(dirname(dirname(__file__))), image_name))

            imageObj.coloredImage.save('myColoredPhoto.jpg', colored_image, save=True)

            data = {
                'colorImageURL': imageObj.coloredImage.url
            }
            return JsonResponse(data)

    return render(request, 'colorize/index.html')
