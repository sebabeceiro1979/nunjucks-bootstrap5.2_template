# nunjucks-bootstrap5.2_template
 Nunjucks, Bootstrap 5.2 and css Template

Project
 ┣ controllers
 ┃ ┗ pagesController.js
 ┣ src
 ┃ ┣ css
 ┃ ┃ ┗ style.css (it's not bootstrap - CSS only)
 ┃ ┗ js
 ┃ ┃ ┗ app.js
 ┣ views
 ┃ ┣ about.njk
 ┃ ┣ contact.njk
 ┃ ┣ header.njk (Here you could change the tab name)
 ┃ ┣ index.njk
 ┃ ┣ link1.njk
 ┃ ┣ link2.njk
 ┃ ┗ master.njk
 ┣ README.md
 ┣ index.js
 ┣ package-lock.json
 ┣ package.json
 ┗ routes.js```
```

#/views/header.njk 
Here you can change the name that appears on the tab.
It's formed by a "Project name" and by the name of the page were you are in.

{% block projectTitle %}
    Nunjucks - {# Project name #}
    {% block title %}{% endblock %} {# Name of the page (link) #}
{% endblock %}

#/views/master.njk
<title>
    {% block projectTitle %}{% endblock %}
</title> 
