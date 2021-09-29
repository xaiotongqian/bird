var AutoArea = AutoArea || {};
AutoArea.areautil = function () {
    var _areautil = {},
    unExpInfoArr = { "1102": "1101", "1202": "1201", "3102": "3101", "5002": "5001" };//1102 的数据 已经没有了。这里还保留着。不删除。

    //获取省份id，参数可以是省份，城市，县id，如果无法确定，返回"0"
    _areautil.getProvinceId = function (id) {
        if (id == undefined) {
            id = autoHeaderObj.cookies.read("cookieCityId", "0");
            id = id == "0" ? autoHeaderObj.cookies.read("area", "0") : id;
        }
        id = id.toString();
        id = id.toString();
        if (id == undefined || id.length != 6) {
            return 0;
        }
        var pId = id.substr(0, 2);
        if (pId == "99") {
            return 0;
        }

        return parseInt(pId + "0000", 10);
    };

    //获取城市id，参数可以是省份，城市，县id，如果无法确定，返回"0"
    _areautil.getCityId = function (id) {
        if (id == undefined)
        {
            id = autoHeaderObj.cookies.read("cookieCityId", "0");
            id= id == "0" ? autoHeaderObj.cookies.read("area", "0") : id;
        }
        id = id.toString();
        if (id == undefined || id == "undefined" || id.length != 6) {
            return 0;
        }
        
        var pId = id.substr(0, 2);
        var cId = id.substr(2, 2);
        if (pId == "99" || cId == "99" || cId == "00") {
            return 0;
        };
        if (cId == "90") { // 2019-2-27 夏乃琛 增加；影响29条记录；这些记录。二级，三级都一样； [460000,469001,469001,"五指山"][650000,659002,659002,"阿拉尔"]
            return parseInt(id, 10);
        };
        var _tmpId = id.substr(0, 3);// 2019-2-27 夏乃琛 增加 处理：  [650000,659003,659301,"图木舒克"] [650000,659004,659401,"五家渠"]
        if (_tmpId== '659') {
            return parseInt(_tmpId +'000', 10);
        }
        _tmpId = id.substr(0, 4);
        if (unExpInfoArr[_tmpId]) {
            _tmpId = unExpInfoArr[_tmpId];
        };
//        if (_tmpId == "6590" || _tmpId=="4690" || _tmpId=="4290") {   2019-2-17  删除这里的判断。有上面 统一处理;
//            return parseInt(id, 10);
//        }
        return parseInt(_tmpId + "00", 10);
    };

    //获取县区id，参数可以是省份，城市，县id，如果无法确定，返回"0"
    _areautil.getCountyId = function (id) {
        if (id == undefined) {
            id = autoHeaderObj.cookies.read("cookieCityId", "0");
            id = id == "0" ? autoHeaderObj.cookies.read("area", "0") : id;
        }
        id = id.toString();
        if (id == undefined || id.length != 6) {
            return 0;
        }
        var pId = id.substr(0, 2);
        var cId = id.substr(2, 2);
        var countyId = id.substr(4, 2);
        if (pId == "99" || cId == "99" || countyId == "99" || countyId == "00") {
            return 0;
        }
        return parseInt(id, 10);
    };

    return _areautil;
}();