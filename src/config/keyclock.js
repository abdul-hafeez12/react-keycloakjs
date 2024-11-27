import Keycloak from "keycloak-js";

const keyclok = new Keycloak({
    url:"http://localhost:9090/",
    realm:"fe-realm",
    clientId:"fe-app"
});

export default keyclok;