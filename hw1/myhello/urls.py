from django.urls import path

from . import views

urlpatterns = [

    path('addcourse/', views.add_course), # 這裡寫 add/ 即可

    path('courselist/',views.course_list),

]
 