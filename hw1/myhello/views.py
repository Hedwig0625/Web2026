from django.http import JsonResponse

from rest_framework.decorators import api_view

from rest_framework.response import Response

from rest_framework import status

from .models import Course  # 注意這裡已經改成 Course 了

# 1. 加入課程 API (對應網址：addcourse)

@api_view(['GET'])

def add_course(request):

    # 從網址抓取作業要求的這三個參數

    dept = request.GET.get('Department', '')

    title = request.GET.get('CourseTitle', '')

    teacher = request.GET.get('Instructor', '')

    # 建立一個新的課程資料並存檔

    new_c = Course(Department=dept, CourseTitle=title, Instructor=teacher)

    new_c.save()

    if title:

        return Response({"data": title + " 加入成功!"}, status=status.HTTP_200_OK)

    else:

        return Response({"res": "請輸入課程名稱"}, status=status.HTTP_400_BAD_REQUEST)

# 2. 回傳課程列表 API (對應網址：courselist)

@api_view(['GET'])

def course_list(request):

    # 抓出資料庫裡所有的課程

    courses = Course.objects.all().values()

    # 按照老師要求，直接回傳 JsonResponse

    return JsonResponse(list(courses), safe=False)
 
 