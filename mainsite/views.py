from django.shortcuts import render

# Create your views here.


def main(request):
    title = 'Travel Freely!'

    content = {
        'title': title,
    }

    return render(request, 'mainsite/index.html', context=content)