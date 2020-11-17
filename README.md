# control-fpga-via-raspi-and-webserver

[![CodeClimate Issues](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/badges/issue_count.svg)](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/issues)
[![MIT License](http://img.shields.io/:license-mit-blue.svg)](http://jeffdecola.mit-license.org)

_Control a FPGA via Raspberry Pi and a WebServer._

Table of Contents,

* TBD

[GitHub Webpage](https://jeffdecola.github.io/control-fpga-via-raspi-and-webserver/)

## OVERVIEW

This is the setup,

![IMAGE - controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg - IMAGE](docs/pics/controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg)


## MY GITHUB WEBPAGE IS UPDATED USING CONCOURSE (OPTIONAL)

For fun, I use concourse to automatically update
[my GitHub Webpage](https://jeffdecola.github.io/control-fpga-via-raspi-and-webserver/) and alert me of
the changes via repo status and slack.

The update is accomplished this by copying and editing/updating
this `README.md` file to `/docs/_includes/README.md`.

A pipeline file [pipeline.yml](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/ci/scripts/readme-github-pages.sh)
shows the entire ci flow. Visually, it looks like,

![IMAGE - control-fpga-via-raspi-and-webserver concourse ci pipeline - IMAGE](docs/pics/control-fpga-via-raspi-and-webserver-pipeline.jpg)

The `jobs` and `tasks` are,

* `job-readme-github-pages` runs task
  [readme-github-pages.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/ci/scripts/readme-github-pages.sh).

The concourse `resources types` are,

* `control-fpga-via-raspi-and-webserver` uses a resource type
  [docker-image](https://hub.docker.com/r/concourse/git-resource/)
  to PULL a repo from github.
* `resource-slack-alert` uses a resource type
  [docker image](https://hub.docker.com/r/cfcommunity/slack-notification-resource)
  that will notify slack on your progress.
* `resource-repo-status` uses a resource type
  [docker image](https://hub.docker.com/r/dpb587/github-status-resource)
  that will update your git status for that particular commit.

For more information on using concourse for continuous integration,
refer to my cheat sheet on [concourse](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/software/operations-tools/continuous-integration-continuous-deployment/concourse-cheat-sheet).
