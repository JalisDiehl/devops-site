---
title: Overlay model
description: Generic base, per-environment overlay. The diff between dev and prod should fit in a review.
order: 2
---

Kustomize splits what is **shared** from what is **this environment**.

```
<service>/
  base/           # generic deployment, service, ingress
    kustomization.yaml
  overlays/
    dev/
    stg/
    prod/
```

The **base** declares resources with a placeholder image (`:latest` or an internal name). Labels, ports, and probes live here. No production hostname. No real tag.

The **overlay** does three things, and almost only those:

- `images`: `newName` + `newTag` for the registry and that environment’s tag.
- patches: env vars, replicas, resources, HPA/PDB in prod.
- ingress or HTTPRoute hosts.

## Boring environment names on purpose

Use a closed set: `dev`, `hom` / `stg`, `prod`. Do not invent `prod2` because the cluster is different — the ApplicationSet destination changes, not the overlay vocabulary.

## What an overlay is not

It is not a fork of the whole deployment. If the overlay file grows until it duplicates the base, the model broke: move the shared bits back and leave only the delta.

Secrets are **not** overlays. Credentials belong in a cluster Secret (pre-created, Sealed Secrets, External Secrets, Vault). The overlay at most **references** the Secret name.

## Review

A PR that only changes `images.newTag` is an image bump. A PR that touches hostname, replicas, and env is an environment change. Both should be obvious in the diff. If they are not, the overlay is doing too much.
