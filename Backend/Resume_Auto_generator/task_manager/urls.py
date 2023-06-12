from django.urls import path
from . import views


urlpatterns = [
    path("api/tasks/", views.get_all_tasks, name="get_all_tasks"),
    path("api/tasks/<int:id>/", views.get_task, name="get_task"),
    path("api/addtasks/", views.create_task, name="create_task"),
    path("api/updatetasks/<int:id>/", views.update_task, name="update_task"),
    path("api/deltasks/<int:id>/", views.delete_task, name="delete_task"),
]
