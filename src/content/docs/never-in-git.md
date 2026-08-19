---
title: What never goes in Git
description: The catalog is visible to the team. Credentials, chart cache, and kubeconfig are not.
order: 7
---

GitOps does not mean “everything in Git”. It means **desired state** in Git. Desired state does not include the secret.

Always stay out of the repository:

- Plaintext secrets (`password:`, HMAC keys, API tokens).
- Cloud access key / secret key (Route53, Cloudflare, object storage).
- kubeconfig, client certificates, bootstrap tokens.
- CSI `cloud-config` (or any hypervisor) contents.
- The `charts/` directory produced by `kustomize build --enable-helm`.
- `.env`, `credentials.json`, database dumps, PVC dumps.

## How the cluster gets the secret

The Secret already exists in the namespace (created once, out of band), or a controller (External Secrets, Sealed Secrets, Vault Agent) materializes it from a store. The Git manifest cites `secretKeyRef` or the Secret name. The value does not travel in the PR.

If a `credentials.yaml` shows up in an overlay, treat it as debt: migrate and delete. Do not “encrypt it in Git” as an excuse to keep plaintext next to it.

## PR review

Minimum diff checklist:

- No value that authenticates to an external system.
- No new `charts/` tree.
- `syncPolicy` copied, not reinvented.
- Image tag on the right overlay.

Everything else is product. This is catalog hygiene.
