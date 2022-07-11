// //Get "Information Technology Services" Data
// var Information_Technology_Services = {
//     appName: "iknow.everestgroup",
//     reportName: "Reports_usage_data",
//     criteria: "(Service_Line == \"Information Technology Services\"",
//     page: 1,
//     pageSize: 100
// }
// ZOHO.CREATOR.API.getAllRecords(Information_Technology_Services).then(function (response) {
//     var recordArr = response.data;
//     for (var index in recordArr) {
//         console.log(recordArr[index]);
//     }
// });
//Get "Business Process Services" Data
var Business_Process_Services = {
    appName: "iknow.everestgroup",
    reportName: "Reports_usage_data",
    criteria: "(Service_Line == \"Business Process Services\"",
    page: 1,
    pageSize: 100
}
ZOHO.CREATOR.API.getAllRecords(Business_Process_Services).then(function (response) {
    var recordArr = response.data;
    for (var index in recordArr) {
        console.log(recordArr[index]);
    }
});
//Get "Global Sourcing" Data
var Global_Sourcing = {
    appName: "iknow.everestgroup",
    reportName: "Reports_usage_data",
    criteria: "(Service_Line == \"Global Sourcing\"",
    page: 1,
    pageSize: 100
}
ZOHO.CREATOR.API.getAllRecords(Global_Sourcing).then(function (response) {
    var recordArr = response.data;
    for (var index in recordArr) {
        console.log(recordArr[index]);
    }
});
//Get "Information Technology Services/Business Process Services" Data
var Information_Technology_Services_Business_Process_Services = {
    appName: "iknow.everestgroup",
    reportName: "Reports_usage_data",
    criteria: "(Service_Line == \"Information Technology Services/Business Process Services\"",
    page: 1,
    pageSize: 100
}
ZOHO.CREATOR.API.getAllRecords(Information_Technology_Services_Business_Process_Services).then(function (response) {
    var recordArr = response.data;
    for (var index in recordArr) {
        console.log(recordArr[index]);
    }
});
//Get "Other" Data
var Other = {
    appName: "iknow.everestgroup",
    reportName: "Reports_usage_data",
    criteria: "(Service_Line == \"Other\"",
    page: 1,
    pageSize: 100
}
ZOHO.CREATOR.API.getAllRecords(Other).then(function (response) {
    var recordArr = response.data;
    for (var index in recordArr) {
        console.log(recordArr[index]);
    }
});