# -*- coding: utf-8 -*-


def test_bake_project(cookies):
    result = cookies.bake(extra_context={'repo_name': 'my_project'})
    assert result.exit_code == 0
    assert result.exception is None
    assert result.project.basename == "my_project"
    assert result.project.isdir()
