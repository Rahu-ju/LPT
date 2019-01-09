'''Define URL pattern for learning_path_tracker'''

from django.urls import path
from . import views

urlpatterns = [
	#Home page
	path('', views.index, name='home'),
	#topics page
	path('topics/', views.topics, name='topics'),
	#For a single topic
	path('topic/<int:topic_id>/', views.topic, name='topic'),
	#page for adding a new topic
	path('new_topic', views.new_topic, name='new_topic'),
	#Page for adding  new entry
	path('new-entry/<int:topic_id>/', views.new_entry, name='new_entry'),
	#Page for editing an entry
	path('edit_entry/<int:entry_id>', views.edit_entry, name='edit_entry'),
	#recent goal
	path('recent/', views.latest, name='recent'),
	

]
