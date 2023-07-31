interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Admin', 'Vehicle Owner'],
  tenantName: 'Organization',
  applicationName: 'Carpool',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
