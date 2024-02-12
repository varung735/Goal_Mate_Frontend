const config = {
    env: process.env.REACT_APP_ENV,
    api_route_local: process.env.REACT_APP_LOCAL_API_ROUTE,
    api_route_prod: process.env.REACT_APP_PROD_API_ROUTE,
    google_client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    google_client_secret: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET
}

export default config;