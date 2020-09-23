# create a kubernetes cluster on AWS with KOPS

## install KOPS

- brew update && brew install kops

- install kubernetes

- create a IAM user and grant the following permissions
  AmazonEC2FullAccess
  AmazonRoute53FullAccess
  AmazonS3FullAccess
  IAMFullAccess
  AmazonVPCFullAccess

- create a s3 bucket for storing KOPS config
  aws s3api create-bucket --bucket sn-dev-kops-state-store --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1

- export cluster name and s3 state store
  export KOPS_CLUSTER_NAME=sn-dev.k8s.local
  export KOPS_STATE_STORE=s3://sn-dev-kops-state-store

## create cluster

- create cluster definition
  kops create cluster --node-count=2 --node-size=t2.micro --node-volume-size=10 --master-count=1 --master-size=t2.micro --master-volume-size=10 --zones=ca-central-1a --name=${KOPS_CLUSTER_NAME} --ssh-public-key=${SSH_KEY_PUBLIC}

- update cluster info ( change etcd volume size )
  kops edit cluster --name=\${KOPS_CLUSTER_NAME}

Example - update etcd volume size

```yaml
etcdClusters:
  - etcdMembers:
      - instanceGroup: master-us-east-1a
        name: a
        volumeSize: 5
    name: main
  - etcdMembers:
      - instanceGroup: master-us-east-1a
        name: a
        volumeSize: 5
    name: events
```

- create cluster
  kops update cluster --name \${KOPS_CLUSTER_NAME} --yes

## operations

- update pod
  kops edit ig nodes

- update master
  kops get ig
  kops edit ig <master node name>

- update cluster
  kops update cluster --yes

- deploy changes
  kops rolling-update cluster
-
