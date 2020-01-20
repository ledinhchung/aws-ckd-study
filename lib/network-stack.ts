import { Construct } from '@aws-cdk/core'; import * as ec2 from '@aws-cdk/aws-ec2';

export class NetworkStack extends Construct {
  constructor(scope: Construct, id: string = 'test-vpc') {
    super(scope, id);

     this.vpc = new ec2.Vpc(this, id, {
      maxAzs: 3,
      cidr: '172.10.0.0/24',
      subnetConfiguration: [
        {
          cidrMask: 28,
          name: 'public 1',
          subnetType: ec2.SubnetType.PUBLIC
        },
        {
          cidrMask: 28,
          name: 'private 1',
          subnetType: ec2.SubnetType.PRIVATE
        }
      ]
    });
  }

  public vpc: ec2.Vpc;
}
