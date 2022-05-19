oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ali-cli
$ acli COMMAND
running command...
$ acli (--version)
ali-cli/0.0.0 darwin-x64 node-v16.13.1
$ acli --help [COMMAND]
USAGE
  $ acli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`acli hello PERSON`](#acli-hello-person)
* [`acli hello world`](#acli-hello-world)
* [`acli help [COMMAND]`](#acli-help-command)
* [`acli plugins`](#acli-plugins)
* [`acli plugins:install PLUGIN...`](#acli-pluginsinstall-plugin)
* [`acli plugins:inspect PLUGIN...`](#acli-pluginsinspect-plugin)
* [`acli plugins:install PLUGIN...`](#acli-pluginsinstall-plugin-1)
* [`acli plugins:link PLUGIN`](#acli-pluginslink-plugin)
* [`acli plugins:uninstall PLUGIN...`](#acli-pluginsuninstall-plugin)
* [`acli plugins:uninstall PLUGIN...`](#acli-pluginsuninstall-plugin-1)
* [`acli plugins:uninstall PLUGIN...`](#acli-pluginsuninstall-plugin-2)
* [`acli plugins update`](#acli-plugins-update)

## `acli hello PERSON`

Say hello

```
USAGE
  $ acli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/eftakharali/acli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `acli hello world`

Say hello world

```
USAGE
  $ acli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `acli help [COMMAND]`

Display help for acli.

```
USAGE
  $ acli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for acli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `acli plugins`

List installed plugins.

```
USAGE
  $ acli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ acli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `acli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ acli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ acli plugins add

EXAMPLES
  $ acli plugins:install myplugin 

  $ acli plugins:install https://github.com/someuser/someplugin

  $ acli plugins:install someuser/someplugin
```

## `acli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ acli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ acli plugins:inspect myplugin
```

## `acli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ acli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ acli plugins add

EXAMPLES
  $ acli plugins:install myplugin 

  $ acli plugins:install https://github.com/someuser/someplugin

  $ acli plugins:install someuser/someplugin
```

## `acli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ acli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ acli plugins:link myplugin
```

## `acli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ acli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ acli plugins unlink
  $ acli plugins remove
```

## `acli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ acli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ acli plugins unlink
  $ acli plugins remove
```

## `acli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ acli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ acli plugins unlink
  $ acli plugins remove
```

## `acli plugins update`

Update installed plugins.

```
USAGE
  $ acli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
