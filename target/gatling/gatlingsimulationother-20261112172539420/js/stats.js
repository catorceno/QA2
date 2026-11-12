var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1590",
        "ok": "1590",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1089",
        "ok": "1089",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "244",
        "ok": "244",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1034",
        "ok": "1034",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1094",
        "ok": "1094",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1466",
        "ok": "1466",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1565",
        "ok": "1565",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 83
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
},
contents: {
"req_post--public-v2-bfb41": {
        type: "REQUEST",
        name: "POST /public/v2/users",
path: "POST /public/v2/users",
pathFormatted: "req_post--public-v2-bfb41",
stats: {
    "name": "POST /public/v2/users",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1091",
        "ok": "1091",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1590",
        "ok": "1590",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1259",
        "ok": "1259",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1343",
        "ok": "1343",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1540",
        "ok": "1540",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1580",
        "ok": "1580",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_delete--public--f705a": {
        type: "REQUEST",
        name: "DELETE /public/v2/users/{userid}",
path: "DELETE /public/v2/users/{userid}",
pathFormatted: "req_delete--public--f705a",
stats: {
    "name": "DELETE /public/v2/users/{userid}",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "977",
        "ok": "977",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "919",
        "ok": "919",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles1": {
        "total": "977",
        "ok": "977",
        "ko": "-"
    },
    "percentiles2": {
        "total": "977",
        "ok": "977",
        "ko": "-"
    },
    "percentiles3": {
        "total": "977",
        "ok": "977",
        "ko": "-"
    },
    "percentiles4": {
        "total": "977",
        "ok": "977",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 100
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
