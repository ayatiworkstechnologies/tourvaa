const fs = require('fs');
const path = require('path');

const routes = [
  'app/tours/page.tsx',
  'app/tours/[slug]/page.tsx',
  'app/destinations/page.tsx',
  'app/deals/page.tsx',
  'app/blogs/page.tsx',
  'app/blogs/[slug]/page.tsx',
  'app/help-centre/page.tsx',
  'app/login/page.tsx',
  'app/register/page.tsx',
  'app/forgot-password/page.tsx',
  'app/reset-password/page.tsx',
  'app/booking/traveller-details/page.tsx',
  'app/booking/summary/page.tsx',
  'app/booking/payment/page.tsx',
  'app/booking/success/page.tsx',
  'app/customer/dashboard/page.tsx',
  'app/customer/bookings/page.tsx',
  'app/customer/bookings/[id]/page.tsx',
  'app/customer/profile/page.tsx',
  'app/customer/invoices/page.tsx',
  'app/agent/dashboard/page.tsx',
  'app/agent/create-booking/page.tsx',
  'app/agent/bookings/page.tsx',
  'app/agent/bookings/[id]/page.tsx',
  'app/agent/customers/page.tsx',
  'app/agent/invoices/page.tsx',
  'app/agent/profile/page.tsx',
  'app/supplier/dashboard/page.tsx',
  'app/supplier/bookings/page.tsx',
  'app/supplier/bookings/[id]/page.tsx',
  'app/supplier/profile/page.tsx',
  'app/supplier/messages/page.tsx'
];

routes.forEach(route => {
  const fullPath = path.join(__dirname, '..', route);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(fullPath)) {
    // Generate a simple component name based on the path
    const parts = route.replace('app/', '').replace('/page.tsx', '').split('/');
    let componentName = parts.map(p => {
      // capitalize and remove non-alphanumeric (like brackets)
      const clean = p.replace(/[^a-zA-Z0-9]/g, '');
      return clean.charAt(0).toUpperCase() + clean.slice(1);
    }).join('');
    
    if (!componentName) componentName = 'Page';

    const content = `import React from 'react';

export default function ${componentName}() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-6">${parts.join(' / ')}</h1>
      <p>This is a placeholder page for ${route}.</p>
    </div>
  );
}
`;
    fs.writeFileSync(fullPath, content);
    console.log(`Created ${route}`);
  } else {
    console.log(`Exists ${route}`);
  }
});
