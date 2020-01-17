import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsPattens from '@aws-cdk/aws-ecs-patterns'

export class EcsTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'ecs-vpc', {
      maxAzs: 3,
      cidr: '172.10.0.0/24',
    });

    const cluster = new ecs.Cluster(this, 'EcsCluster', {
      vpc,
      clusterName: 'EcsCluster'
    });

    const ecs_patterns = new ecsPattens.ApplicationLoadBalancedFargateService(this, 'FirstFargateService', {
      cluster,
      cpu: 256,
      memoryLimitMiB: 512,
      publicLoadBalancer: true,
      desiredCount: 2,
      taskImageOptions: { image: ecs.ContainerImage.fromRegistry("nginx") }
    });
  }
}
