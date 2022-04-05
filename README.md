## The Shopping List Plan

# Notes

x add supabase key and url

# Supabase

x Table: ID, created_at (date), description, complete (bool), user_id (foreign key)
x set up policies: user_id must match the authed user. add to USING EXPRESSION and WITH CHECK (uid() =user_id)
x add rows of data

# Display To-Do Page

x should have user id (foreign key), and ID, completion status, description.
Event Listeners: on load-fetch supabase data(window.eventlistener), on click complete To-Do, submit form-create to do, delete to-do's.

Functions; fetch To-Dos and render to-Do's (loops through and appends). TDD render function.
add CSS to show complete and not complete to-do

# Creating new To-Do

createToDo function in fetch-utils
form.addEventListener that calls createToDo
renderToDo to redisplay To-Dos.

# Updating to-do

completeToDo(id) function in fetch-utils
update renderToDo's to add eventListener to each task to call completeToDo function
call renderToDo's to redisplay

# Delete To-Dos

deleteToDos function in fetch-utils
add eventListener to delete button (button.addEventListener)
call renderToDos to redisplay

# Questions

X do we use our own supabase table? YES
