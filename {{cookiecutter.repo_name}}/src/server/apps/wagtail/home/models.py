from __future__ import unicode_literals

from wagtail.wagtailcore.models import Page
from settings import APP_DIR


class HomePage(Page):

    template = str(APP_DIR.path('server/templates/wagtail/pages/home_page.html'))

    pass
