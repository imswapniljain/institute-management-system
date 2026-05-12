backend/
│── node_modules
│── package-lock.json
│── package.json
│── docs/module-map.md
│── server.js
│── src/
│    ├── app.js
│    │      └── app.use("/api/v1/tenants", tenantRoutes)
│    │
│    ├── routes
│    │      └── tenant.routes.js
│    │                      ├── POST / → createTenant
│    │                      └── GET  / → getTenants  
│    │
│    ├── controllers
│    │      └── tenant.controller.js
│    │                      │
│    │                      ├── createTenant()
│    │                      │           └── calls createTenantService()      
│    │                      └── getTenants()  
│    │                                  └── calls getTenantsService()  
│    │
│    ├── services
│    │      └── tenant.service.js
│    │                      │
│    │                      ├── createTenantService()    
│    │                      │   └── uses Tenant.create() 
│    │                      │
│    │                      └── getTenantsService()      
│    │                          └── uses Tenant.find()   
│    │
│    ├── models
│    │      └── tenant.model.js
│    │                      └── Tenant schema            
│    │
│    │
│    │
│    │
    
    