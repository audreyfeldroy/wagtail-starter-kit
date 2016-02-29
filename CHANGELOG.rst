**********
Change Log
**********

All enhancements and patches to cookiecutter-django will be documented in this file. This project adheres to `Semantic Versioning`_.

[2016-02-29]
============

**Added**

* stylesheets directory

  - added stylesheets/base
  - added stylesheets/utils
  - added main.styl

* javascripts directory
* tests directory

  - renamed ``js`` directory to ``javascripts``

* config directory

  - custom error pages - 400, 404, 500
  - documentation for error pages
  - configured to support favicon

* apps directory

  - custom wagtail branding templates

**Changed**

* ``javascripts/index.js`` - comments added
* ``tools.config.js`` - configured to reflect changed to static directory structure
* ``webpack.config.js`` - configured to reflect changed to static directory structure
* ``docs`` - updated the readme for the documentation.

[2016-02-28]
============

initial commit (@tkjone)

.. _Semantic Versioning: http://semver.org/
