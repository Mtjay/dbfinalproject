module.exports = {
    user: "aditianna",
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString:"oracle.cise.ufl.edu/orcl"
};
//closes db conncetion
//for help: https://stackoverflow.com/questions/50692610/how-to-release-oracle-database-connection-when-node-js-exits
//https://www.oracle.com/webfolder/technetwork/tutorials/obe/cloud/apaas/node/node-employee-service/node-employee-service.html
// function doRelease(connection) {
//     connection.release(function (err) {
//       if (err) {
//         console.error(err.message);
//       }
//     });
//   }