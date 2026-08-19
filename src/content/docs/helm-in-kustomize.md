---
title: Helm-in-Kustomize
description: The chart arrives at sync time, not in Git. Kustomize names the chart; Argo CD fetches it.
order: 4
---

There are three honest ways to install a chart:

1. **Pure Kustomize** — only your YAML.
2. **Helm-in-Kustomize** — `helmCharts:` in `kustomization.yaml`.
3. **Helm Application / ApplicationSet** — Argo CD installs the chart directly.

Use (2) when the component is a stable chart (ingress, cert-manager, Grafana, CSI) and you already live in Kustomize. The file declares repository, name, version, and values. Argo CD needs `--enable-helm`.

## The `charts/` directory is not source of truth

`kustomize build --enable-helm .` downloads the chart into `charts/` next to `kustomization.yaml`. That is a **local cache**. It does not belong in Git: Argo CD resolves the same chart at sync.

After local validation:

1. Delete `charts/` from the component.
2. Check `git status` before you commit.

Also do not version `Chart.lock` or tarballs from this flow. The pinned version lives in `helmCharts.version`.

## Values

Oversized values in `kustomization.yaml` become unreadable. Extract them to a `values.yaml` Kustomize can reference, and leave in `kustomization` only what identifies the chart (repo, name, version, namespace).

## When not to use it

If the chart needs CRDs applied in an earlier wave, or a Helm lifecycle (hooks, native rollback) that Kustomize cannot express, ship the chart as a Helm source on the Application. Do not force Helm-in-Kustomize for symmetry.
