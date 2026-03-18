from django.http import JsonResponse

from rest_framework.decorators import api_view

from rest_framework.response import Response

from rest_framework import status

from .models import Post

import json

from django.core.serializers.json import DjangoJSONEncoder

# 功能 1：新增資料 (add_post)

@api_view(['GET'])

def add_post(request):

    title = request.GET.get('title', '')

    content = request.GET.get('content', '')

    photo = request.GET.get('photo', '')

    location = request.GET.get('location', '')

    new_post = Post()

    new_post.title = title

    new_post.content = content

    new_post.photo = photo

    new_post.location = location

    new_post.save() # 存入資料庫

    if title:

        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)

    else:

        return Response({"res": "parameter: name is None"}, status=status.HTTP_400_BAD_REQUEST)

# 功能 2：列出資料 (list_post)

@api_view(['GET'])

def list_post(request):

    posts = Post.objects.all().values()

    # 這是投影片最後強調「一定要改」的地方，直接回傳 JsonResponse

    return JsonResponse(list(posts), safe=False)
 