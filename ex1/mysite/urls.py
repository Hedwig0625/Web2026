from django.contrib import admin
from django.urls import path
from myapi.views import MyHelloView
urlpatterns = [
   path('admin/', admin.site.urls),
   path('myhello/', MyHelloView.as_view()),
]
