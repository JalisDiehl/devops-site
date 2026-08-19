---
title: Many clusters, one catalog
description: Cloud, on-prem, and lab Kubernetes in the same repo. The destination changes; the model does not.
order: 3
---

A GitOps catalog is not “one cluster”. It is a repository that describes **many destinations**.

Three families show up constantly:

| Destination | Typical role | How Argo CD talks to it |
|-------------|----------------|-------------------------|
| Managed cloud Kubernetes (EKS and equivalents) | products and autoscaling | remote API URL |
| On-prem Kubernetes | workloads that stay on the network | in-cluster or internal API |
| Lab Kubernetes | experiments, Gateway API, hypervisor CSI | in-cluster |

The ApplicationSet lists `cluster` + `server`. The overlay is the same *kind* of artifact; `destination.namespace` and `project` bind the product to the right cluster.

## Do not copy the cluster

The classic mistake is duplicating the whole infra folder “because it is another EKS”. Extract what is *this* cluster (name, IAM, IP pool, DNS zone) into the overlay or chart values. The component — cert-manager, Grafana, ingress — stays the same.

## AppProject per product and environment

A tight AppProject (which repos, namespaces, clusters) stops a staging ApplicationSet from pointing at production via a wrong `server`. The project name in the ApplicationSet template is copied from the environment file, not improvised.

## A lab is not prod with fewer replicas

Labs exist to validate Cilium, Gateway API, CSI. Separate destination, separate certificate issuer, separate DNS `txtOwnerId`. Colliding DNS records between lab and prod is the kind of incident the catalog should make impossible.
