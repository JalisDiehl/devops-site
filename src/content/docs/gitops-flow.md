---
title: GitOps flow
description: CI builds the image. Git records the tag. The cluster syncs. Nobody applies manifests by hand.
order: 1
---

The flow is a line, not a ceremony.

1. CI **builds** the image and publishes it to the registry.
2. A human (or the pipeline) writes the desired tag into that environment’s **overlay**.
3. An ApplicationSet watches the overlay path and creates or updates the Argo CD Application.
4. Argo CD **syncs** the destination. Self-heal undoes drift. Prune removes what left Git.

CI never talks to the cluster API. The cluster never builds images. Each side has a contract.

```
build → tag in overlay → ApplicationSet → sync / self-heal
```

## Why the tag lives in Git

The tag is desired state. History, review, and rollback are `git log` and `git revert`, not a dashboard click. Different environments point at different tags for the same service: a develop SHA on the dev overlay, a stage tag on stg, a release tag on prod.

## ApplicationSet, not a lone Application

A `git` + `list` generator (cluster / server) covers the overlay directory. The Application template copies `syncPolicy` from a neighbour in the same file: automated, prune, self-heal, `CreateNamespace`. Do not invent policy per service.

The Application `path` is the overlay. `destination.server` is the target cluster API (remote URL in the cloud, `https://kubernetes.default.svc` when Argo CD runs in-cluster).

## What stays out of this flow

Plaintext secrets, kubeconfigs, and the `charts/` cache Kustomize downloads locally. Sync resolves Helm on the cluster. Git keeps only what a human should review.
