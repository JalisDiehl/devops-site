export const ui = {
  brand: 'Jalis Diehl',
  tagline: 'DevOps',
  nav: {
    home: 'Home',
    services: 'Services',
    docs: 'Docs',
    contact: 'Contact',
  },
  paths: {
    home: '/',
    services: '/services',
    docs: '/docs',
    contact: '/contact',
  },
  hero: {
    kicker: 'Platform · GitOps · Operations',
    title: 'DevOps solutions for production Kubernetes.',
    lead:
      'Design, operate, and evolve platforms: GitOps with Argo CD, cloud and on-prem Kubernetes, TLS-automated edge, observability, and a data plane. The same bar as an environment that cannot go down.',
    primary: 'See services',
    secondary: 'Read the architecture',
  },
  home: {
    offeringTitle: 'What I deliver',
    offeringLead: 'From the GitOps repo to the cluster. No theatre — patterns that survive incidents.',
    workTitle: 'How I work',
    work: [
      {
        title: 'Git as the source of truth',
        body: 'The cluster follows the repo. Per-environment overlays, promotion by image tag, self-heal against drift.',
      },
      {
        title: 'Minimal diff, operable defaults',
        body: 'Shared base, overlay only for what changes. Secrets stay out of Git. Charts resolve at sync, not vendored.',
      },
      {
        title: 'Many destinations, one catalog',
        body: 'Cloud Kubernetes, on-prem, and lab clusters in the same model: ApplicationSet, namespace, destination. No hand-copied clusters.',
      },
    ],
    ctaTitle: 'Need a platform your team can actually run?',
    ctaBody: 'A straight conversation about current state, gaps, and the path to continuous GitOps.',
    ctaButton: 'Get in touch',
  },
  services: {
    kicker: 'Services',
    title: 'What I offer',
    lead: 'Project work or ongoing retainers. Everything below is what I operate — not a logo wall.',
    groups: [
      {
        title: 'GitOps delivery',
        items: [
          'Argo CD ApplicationSets pointing at Kustomize overlays',
          'Image promotion by tag (dev → stg → prod) in Git',
          'Helm-in-Kustomize: charts fetched at sync, not vendored in the repo',
          'CI → GitOps handoff: the pipeline builds; the cluster syncs',
        ],
      },
      {
        title: 'Kubernetes platforms',
        items: [
          'EKS, on-prem Kubernetes, and lab clusters in one catalog',
          'Cilium (kube-proxy replacement) and Gateway API',
          'Node and workload autoscaling',
          'Predictable AppProjects, namespaces, and sync policy',
        ],
      },
      {
        title: 'Edge: ingress, DNS, and TLS',
        items: [
          'Ingress NGINX, ALB, or Gateway API depending on the cluster',
          'cert-manager (HTTP-01 and DNS-01)',
          'external-dns on Route53 or Cloudflare',
          'Hostnames and certificates kept out of the app overlay when they belong to the platform',
        ],
      },
      {
        title: 'Observability',
        items: [
          'Metrics with VictoriaMetrics or Prometheus',
          'Logs with Loki / Promtail',
          'Grafana as the single surface',
          'Cluster cost (OpenCost) when it earns its keep',
        ],
      },
      {
        title: 'Data plane',
        items: [
          'Kafka (Strimzi), CDC, queues (RabbitMQ), and MQTT (EMQX)',
          'Redis / KeyDB and PostgreSQL with an operator',
          'Connectors and workers as GitOps apps, not snowflakes',
        ],
      },
      {
        title: 'Platform engineering',
        items: [
          'Internal registry, Vault, in-cluster quality gates',
          'CI/CD contract: build produces the artifact; Git records the desired state',
          'Architecture docs for the team, not for the tool',
        ],
      },
    ],
  },
  docs: {
    kicker: 'Architecture',
    title: 'Patterns, not internal runbooks',
    lead:
      'How a real GitOps catalog is organized. Original writing — no customer manifests, no product names.',
    read: 'Read',
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s talk about your cluster.',
    lead:
      'Describe the environment (cloud, on-prem, lab Kubernetes), what already lives in Git, and where it hurts: sync, DNS, observability, data plane. Direct replies.',
    emailLabel: 'Email',
    email: 'jalisdiehl@gmail.com',
    phoneLabel: 'Phone',
    phone: '+55 51 99725-5858',
    phoneHref: '+5551997255858',
  },
  footer: {
    rights: 'Jalis Diehl · DevOps',
    built: 'Static site. Cluster deploy comes later.',
  },
} as const;

export const homeOfferings = [
  {
    title: 'GitOps',
    body: 'ApplicationSets, overlays, promotion by tag. The cluster converges; nobody kubectl-applies YAML.',
  },
  {
    title: 'Kubernetes',
    body: 'EKS, on-prem, and lab Kubernetes. Cilium, Gateway API, autoscaling. One catalog, many destinations.',
  },
  {
    title: 'Edge',
    body: 'Ingress or Gateway, cert-manager, external-dns. Hostname and certificate as platform concerns.',
  },
  {
    title: 'Observability',
    body: 'Metrics, logs, and cost on one surface. Node agents, remote write to the backend.',
  },
  {
    title: 'Data plane',
    body: 'Kafka, CDC, MQTT, Redis, Postgres with an operator. Same GitOps as the APIs.',
  },
  {
    title: 'Platform',
    body: 'Registry, secrets, CI → Git contract. The pipeline is not the deploy.',
  },
] as const;
