from django.urls import path

from . import views

urlpatterns = [

    path('add/', views.add_post, name='add_post'), # 這裡寫 add/ 即可

    path('list/', views.list_post, name='list_post'),

]
 