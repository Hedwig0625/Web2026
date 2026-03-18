from django.contrib import admin

from django.urls import path, include # 記得要加 include

urlpatterns = [

    path('admin/', admin.site.urls),

    path('myhello/', include('myhello.urls')), # 把 myhello 的網址接進來

]
 