---
layout: ../../layouts/Documentation.astro
author: Some Developer
title: Repository
description: Some code Repository
draft: false
tags: ["Some code", "Repository"]
order: 14
date: 2023-08-19
---

The default repository type is SQLite, it works very well with a small amount of data. For high-load systems, we recommend using different database type

## Supported Repository Database Types

- SQLite
- Postgres
- MySQL
- MariaDB
- Microsoft SQL Server
- Oracle

## Changing Repository Type

- Set RUN_SQL_SCRIPTS=1
- Set Set CONNECTION_TYPE, DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT, DB_INSTANCE to appropriate values
- Restart Some code
- Follow setup procedure and create ADMIN user
- Restart Some code

_If migrating do not forget making repository backup first_
