│── server.js [f]
│   └─
└──src/
    ├── app.js [f]
    │      └── app.use("/api/v1/tenants", tenantRoutes) [R]
    │
    ├── routes
    │      └── tenant.routes.js [f]
    │                      ├── POST / → createTenant [C]
    │                      └── GET  / → getTenants   [C]
    │
    ├── controllers
    │      └── tenant.controller.js [f]
    │                      │
    │                      ├── createTenant() [C]
    │                      │           └── calls createTenantService() [S]       
    │                      └── getTenants()   [C]
    │                                  └── calls getTenantsService()   [S]
    │
    ├── services
    │      └── tenant.service.js [f]
    │                      │
    │                      ├── createTenantService()     [S]
    │                      │   └── uses Tenant.create()  [M]
    │                      │
    │                      └── getTenantsService()       [S]
    │                          └── uses Tenant.find()    [M]
    │
    ├── models
    │      └── tenant.model.js [f]
    │                      └── Tenant schema             [M]
    │
    │
    │
    │
    
    