# Research Data Management at TU Graz

Welcome to the official repository for the Research Data Management (RDM) website at TU Graz. Our mission is to promote awareness and implementation of best practices in research data management, providing resources and support to the research community at TU Graz.

## Project Overview

The RDM project at TU Graz facilitates good management of research data at all stages of the research process. The website acts as a central hub for resources, advice, and support related to the full spectrum of research data management.

## Building with Next.js 13

Our website leverages the innovative features of Next.js 13 to provide a seamless and interactive experience. With the introduction of the App Router, we've enhanced our service delivery by enabling:

- **Efficient Navigation**: Fast and state-persistent transitions between the different services and resources offered by the RDM team.
- **Dynamic Content Loading**: Server Components and Streaming allow for the real-time presentation and update of service information and available resources.
- **Modern Data Fetching**: Using Suspense for Data Fetching, we can ensure that the latest information is presented in an efficient and responsive manner. (not yet implemented)

# Getting Started

## Running Locally

1. Install dependencies:

```sh
pnpm install
```

2. Start the dev server:

```sh
pnpm dev
```

## Documentation

https://nextjs.org/docs

## Running with Docker

1. Build image

```sh
docker build -t rdm:latest .
```

2. Run

```sh
docker run -p 3000:3000 rdm:latest
```

## Kubernetes

In _k8s_ folder there is a deployment manifest. This repository can be used by a tool like ArgoCD to setup an automated kubernetes deployment in an already existing cluster.
