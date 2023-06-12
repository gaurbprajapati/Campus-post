from django.forms import model_to_dict
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Task


# GET all tasks
@api_view(["GET"])
@csrf_exempt
def get_all_tasks(request):
    tasks = Task.objects.all()
    task_list = []
    for task in tasks:
        task_data = {
            "id": task.id,
            "title": task.title,
            "description": task.description,
        }
        task_list.append(task_data)
    return JsonResponse(task_list, safe=False)


# GET a single task by ID


@api_view(["GET"])
@csrf_exempt
def get_task(request, id):
    try:
        task = Task.objects.get(id=id)
        task_data = {
            "id": task.id,
            "title": task.title,
            "description": task.description,
        }
        return JsonResponse(task_data)
    except Task.DoesNotExist:
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)


# POST a new task
@api_view(["POST"])
@csrf_exempt
def create_task(request):
    title = request.data.get("title")
    description = request.data.get("description")

    if not title:
        return Response(
            {"error": "Title field is required"}, status=status.HTTP_400_BAD_REQUEST
        )

    try:
        task = Task.objects.create(title=title, description=description)
        return Response(model_to_dict(task), status=status.HTTP_201_CREATED)
    except Exception as e:
        print("Error creating task:", e)
        return Response(
            {"error": "Task is not created"}, status=status.HTTP_404_NOT_FOUND
        )


# PUT/update an existing task
@api_view(["PUT"])
@csrf_exempt
def update_task(request, id):
    try:
        task = Task.objects.get(id=id)
        title = request.data.get("title")
        description = request.data.get("description")

        if not title:
            return Response(
                {"error": "Title field is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        task.title = title
        task.description = description
        task.save()

        task_data = {
            "id": task.id,
            "title": task.title,
            "description": task.description,
        }
        return Response(task_data, status=status.HTTP_201_CREATED)
    except Task.DoesNotExist:
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)


# DELETE a task
@api_view(["DELETE"])
@csrf_exempt
def delete_task(request, id):
    try:
        task = Task.objects.get(id=id)
        task.delete()
        return Response(
            {"message": "Task deleted successfully"}, status=status.HTTP_204_NO_CONTENT
        )
    except Task.DoesNotExist:
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)
