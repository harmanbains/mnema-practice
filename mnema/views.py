from django.http import HttpResponse

def index(request):
    return HttpResponse('Dis my index page y\'all')
