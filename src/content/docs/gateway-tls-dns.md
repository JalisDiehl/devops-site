---
title: Gateway API, TLS, and DNS
description: Hostname and certificate are platform concerns. The app only exposes a Service.
order: 5
---

The edge is its own product. The application declares a Service. What publishes to the internet is the **Gateway** (or Ingress, if the cluster has not migrated yet).

## Pieces

- **Gateway / Ingress**: entrypoint, class (Cilium, NGINX, ALB).
- **HTTPRoute or Ingress**: hostname + backend Service.
- **cert-manager**: Certificate or an annotation on the Gateway/Ingress, HTTP-01 or DNS-01 issuer.
- **external-dns**: watches HTTPRoute or Service and writes the record (Route53, Cloudflare).

DNS-01 belongs when HTTP-01 cannot reach the solver (private network, wildcard). The zone and `txtOwnerId` are **per platform**: two clusters on the same domain need different owners, or one deletes the other’s record.

## TLS on the Gateway

An HTTPS listener with hostname `*.example.com` and a known issuer avoids a certificate per microservice. The app only needs the hostname on the HTTPRoute. Wildcards and DNS-01 travel together.

HTTP :80 exists for redirect or ACME. Do not leave production apps on HTTP because “the lab was like that”.

## What the app should not carry

DNS credentials, cloud accounts, and the load-balancer IP list. Those live in the platform component. The app overlay carries the hostname — and only the hostname — when it actually changes per environment.

## Gateway API and Cilium

Cilium with `kubeProxyReplacement` and Gateway API enabled replaces kube-proxy + classic ingress on labs and clusters born that way. The Gateway API CRD version must match the Cilium version. Gateway CRDs are usually a manual apply at cluster install, not another resource in the app Kustomize.
