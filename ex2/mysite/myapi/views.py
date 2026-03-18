from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
class MyHelloView(APIView):
   def get(self, request):
       # 抓取網址參數 ?name=
       name = request.query_params.get('name')
       # 如果沒給 name，回傳 400 錯誤與指定的訊息
       if name is None or name == "":
           return Response(
               {"res": "parameter: name is None"},
               status=status.HTTP_400_BAD_REQUEST
           )
       # 如果有給 name，回傳 Hello 訊息
       return Response({"res": f"Hello {name}"}, status=status.HTTP_200_OK)