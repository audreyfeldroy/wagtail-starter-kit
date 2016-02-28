# -*- coding: utf-8 -*-
"""{{ cookiecutter.repo_name }} URL Configuration

https://docs.djangoproject.com/en/1.8/topics/http/urls/

"""
from django.conf.urls import include, url
from django.contrib import admin
from django.http import HttpResponse

from wagtail.wagtailcore import urls as wagtail_urls
from wagtail.wagtailadmin import urls as wagtailadmin_urls
from wagtail.wagtaildocs import urls as wagtaildocs_urls
from wagtail.wagtailsearch import urls as wagtailsearch_urls


urlpatterns = [
    # www.example.com/django-admin
    url(
        regex=r'^django-admin/',
        view=include(admin.site.urls)),
    # www.example.com/admin
    url(
        regex=r'^admin/',
        view=include(wagtailadmin_urls)),
    # www.example.com/search
    url(
        regex=r'^search/',
        view=include(wagtailsearch_urls)),
    # www.example.com/documents
    url(
        regex=r'^documents/',
        view=include(wagtaildocs_urls)),
    # www.example.com
    url(
        regex=r'',
        view=include(wagtail_urls)),
    # www.example.com/robots.txt
    url(
        regex=r'^robots.txt$',
        view=lambda r: HttpResponse("User-agent: *\nDisallow: /", content_type="text/plain")),
]
