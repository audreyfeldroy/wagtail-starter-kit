*************************************
Welcome to {{cookiecutter.repo_name}}
*************************************

welcome to **{{cookiecutter.repo_name}}**!  The following is a step-by-step guide to get this project running on your local environment.

.. note:: The following has been tested on OSX and Linux.  Windows may require some additional setup.

Prerequisites
=============

Please make sure you have the following installed on your local development environment:

* `vagrant`_
* `virtualbox`_
* `node`_
* `gulp`_

Click the above links to install the required packages.  When you install ``gulp``, make sure you install it globally.  Further, I also recommend installing ``node`` via `NVM`_.

Quick Start
===========

With the above completed, open a new terminal window and move into the ``{{cookiecutter.repo_name}}`` root directory and run through the following steps.

**1.  Turn your vagrant machine on (first time can take a while)**

.. code-block:: bash

    vagrant up

**2. Login to your VM**

.. code-block:: bash

    vagrant ssh

**3. Install npm packages**

.. code-block:: bash

    npm install

**4. Turn on your Django dev server**

.. code-block:: bash

    django-admin runserver 0.0.0.0:8000

**5. Start the development workflow**

.. code-block:: bash

    gulp start

.. epigraph::

   Did you have any problems with the above?  Please see the ``Gotchas`` section below.  If everything is okay, please continue to step 5.

If things went as expected your browser should automatically open and direct you to http://localhost:3000.  Did it work?  Congratulations!  You now have your base Wagtail site configured and ready for local development.

For more information on this project, please head over to the docs.

Gotchas
=======

.. epigraph::

   I was able to start my VM, SSH into it and start my dev server, but when I tried to visit http://localhost:8111 it did not seem to work.

The most common reason for this is that the port is not correct.  Check to see that you are supposed to be connecting on port ``8111``.  To do this, open a new terminal window, ``cd`` into the ``{{cookiecutter.repo_name}}`` directory and run ``vagrant port``.  This will show you two lines.  The second line will tell you which port to connect to.


.. _vagrant: https://www.vagrantup.com/downloads.html
.. _virtualbox: https://www.virtualbox.org/
.. _node: https://nodejs.org/en/
.. _gulp: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
.. _NVM: https://github.com/creationix/nvm




