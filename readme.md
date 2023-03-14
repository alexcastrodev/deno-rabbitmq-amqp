# Project Name: Deno RabbitMQ Project

# Overview

This is a small project aimed at testing the integration of Deno, a secure JavaScript and TypeScript runtime, with RabbitMQ, a popular open-source message broker. The goal of this project is to understand how to use Deno with RabbitMQ and implement patterns to organize files and use SOLID principles.

# Installation
To use this project, you will need to have Deno and RabbitMQ installed on your machine.

# Deno Installation
You can install Deno by following the instructions on their official website.

RabbitMQ Installation

```bash
docker-compose up -d
```

Usage

To use this project, you will need to start RabbitMQ first. You can do this by running the following command:

### Consumer

```bash
deno run --allow-env --allow-net --allow-read src/consumer.ts
```

### Producer
```bash
deno run --allow-env --allow-net --allow-read src/producer.ts
```