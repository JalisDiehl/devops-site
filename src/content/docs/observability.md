---
title: Observability
description: Metrics, logs, and cost as GitOps components. One surface. Many destinations.
order: 6
---

Observability in the catalog is **infra**, not a sidecar forgotten on the app deployment.

Three layers:

1. **Collection** — node exporter, kube-state-metrics, vmagent / Grafana Agent, Promtail.
2. **Backend** — VictoriaMetrics or Prometheus for metrics; Loki for logs.
3. **Surface** — Grafana. One place for on-call.

Cluster cost (OpenCost or equivalent) lands when usage metrics already exist. Before that it is noise.

## Per environment, not one immortal Prometheus

Dev, staging, and production have similar stacks and **different** destinations. Remote write to a central backend is fine; a single Prometheus scraping three clusters by internal IP is not. The infra ApplicationSet points the component at the right namespace (`monitoring`) on the right cluster.

## What the application does

Expose `/metrics` if the runtime allows it. Do not install Grafana in the product namespace. Labels (`app`, `namespace`, `cluster`) must stay stable — the overlay must not rename `app` per environment and break dashboards.

Logs: stdout. Promtail or equivalent collects them. No “just this microservice” log shipper unless compliance requires it.

## Alerts

vmalert / Prometheus rules versioned in the same catalog. Alerting on “pod Down” without alerting on “Argo CD Application Degraded” leaves GitOps blind. Both planes matter: workload and convergence.
