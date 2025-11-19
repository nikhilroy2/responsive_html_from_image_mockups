//function Capture()
//{
//    alert('Device method start..');
//    var url = "http://127.0.0.1:11100/capture";
//    alert('Device url hit..');
//    // var env = "PP";
//    var PIDOPTS = '<PidOptions ver=\"1.0\">' + '<Opts fCount=\"1\" fType=\"0\" iCount=\"\" iType=\"\" pCount=\"\" env=\"PP\" pType=\"\" format=\"0\" pidVer=\"2.0\" timeout=\"10000\" otp=\"\" wadh=\"\" posh=\"\"/>' + '</PidOptions>';
//    alert('Device get piddata ..');//var PIDOPTS = '<PidOptions ver=\"1.0\">' + '<Opts fCount=\"1\" fType=\"0\" iCount=\"\" iType=\"\" pCount=\"\" pType=\"\" format=\"0\" pidVer=\"2.0\" timeout=\"10000\" otp=\"\" wadh=\"\" posh=\"\"/>' + '</PidOptions>';
//    // var PIDOPTS = "<PidOptions> <Opts fCount=\"1\" fType=\"0\" iCount=\"0\" pCount=\"0\" format=\"0\" pidVer=\"2.0\" timeout=\"20000\" otp=\"\" posh=\"LEFT_INDEX\" env=\"" + env + "\" wadh=\"\" /> <Demo></Demo> <CustOpts> <Param name=\"ValidationKey\" value=\"js1fuuea8+e7lE1MEow3VX6SyG1WuNETPSrfEip83zBzIBxTgGDYI8X9KUffza0U64BpryYJRLRkg3rIkyHemqe+OxFetRI1QQKvVtAG/9lP+ibAqzGboPugE5YtfqbXEjkMEMZtupumTgmwyE0ut5KgA5ai19KXFU+3bLHol5NCCYmLJynrCQkaZJPc81aF\" /> </CustOpts> </PidOptions>";
//
//    //var PIDOPTS = '<PidOptions ver=\"1.0\"> <Opts fCount=\"1\" fType=\"0\" format=\"0\" pidVer=\"2.0\" timeout=\"10000\" env=\"PP\" /></PidOptions>';
//    /*
//     format=\"0\"     --> XML
//     format=\"1\"     --> Protobuf
//     */
//    var xhr;
//    var ua = window.navigator.userAgent;
//    var msie = ua.indexOf("MSIE ");
//
//    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
//    {
//        //IE browser
//        xhr = new ActiveXObject("Microsoft.XMLHTTP");
//    } else {
//        //other browser
//        xhr = new XMLHttpRequest();
//    }
//
//    xhr.open('CAPTURE', url, true);
//    xhr.setRequestHeader("Content-Type", "text/xml");
//    xhr.setRequestHeader("Accept", "text/xml");
//
//    xhr.onreadystatechange = function() {
//        //if(xhr.readyState == 1 && count == 0){
//        //	fakeCall();
//        //}
//        if (xhr.readyState == 4) {
//            var status = xhr.status;
//
//            if (status == 200) {
//                alert(xhr.responseText);
//                alert(document.getElementById('updateProfileForm:hiddenbioBasedLogin').value);
//                document.getElementById('updateProfileForm:hiddenbioBasedLogin').value = xhr.responseText;
//                var a = document.getElementById('updateProfileForm:hiddenbioBasedLogin').value;
//                alert('value of a is..' + a);
////                $('hiddenbioBasedLogin').val(xhr.responseText);
//
//                //if(xhr.responseText.indexOf("errCode=\"100\"") != -1){
//                //alert(xhr.responseText);
//                //fakeCall();
//                //Capture();
//                //}else{
//                //    alert(xhr.responseText);
//                //    console.log(xhr.response);
//                //}
//            } else {
//
//                console.log(xhr.response);
//
//            }
//        }
//
//    };
//
//    xhr.send(PIDOPTS);
//
//}

function Capture()
{

    var url = "http://127.0.0.1:11100/rd/capture";

    var PIDOPTS = '<PidOptions ver=\"1.0\" env=\"P\">' + '<Opts fCount=\"1\" fType=\"0\" iCount=\"\" iType=\"\" pCount=\"\" pType=\"\" format=\"0\" pidVer=\"2.0\" timeout=\"10000\" otp=\"\" wadh=\"\" posh=\"\"/>' + '</PidOptions>';
    /*
     format=\"0\"     --> XML
     format=\"1\"     --> Protobuf
     */
    alert("Put your finger on device");
    var xhr;
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        //IE browser
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        //other browser
        xhr = new XMLHttpRequest();
    }

    xhr.open('CAPTURE', url, true);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.setRequestHeader("Accept", "text/xml");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status == 200) {
                document.getElementById('hiddenbioBasedLogin').value = xhr.responseText;
            } else {

                console.log(xhr.response);
            }
        }

    };
    xhr.send(PIDOPTS);
}
function BiometricJsOptionSelection() {

    var e = document.getElementById('sl_device_input');
    var value = e.options[e.selectedIndex].value;
    //alert(value);
    var strUser = e.options[e.selectedIndex].text;
    if (value === 'C') {
        discoverAvdm1();
    } else {
        CaptureEkyc();
    }
}

function BiometricJsOptionSelectionDealer() {

    var e = document.getElementById('device_id_input');
    var value = e.options[e.selectedIndex].value;
    //alert(value);
    var strUser = e.options[e.selectedIndex].text;
    if (value === 'C') {
        discoverAvdm();
    } else {
        CaptureEkyc();
    }
}

function CaptureEkyc()
{

    var uri = "https://localhost:11100/rd/capture";
    params = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><PidOptions ver="1.0"><Opts fCount="1" fType="2" iCount="0" iType="" pCount="0" pType="0" format="0" pidVer="2.0" timeout="10000" otp="" env="P" wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" posh="LEFT_THUMB"/><CustOpts><Param name="ValidationKey" value=""/></CustOpts></PidOptions>';
    //params = '<?xml version="1.0"?> <PidOptions ver="1.0"> <Opts fCount="1" fType="0" iCount="0" pCount="0" pgCount="2" format="0"   pidVer="2.0" timeout="10000" pTimeout="20000" posh="UNKNOWN" env="P" wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" /> <CustOpts><Param name="mantrakey" value="" /></CustOpts> </PidOptions>';
    var xmlhttp = new XMLHttpRequest();
    alert("Put Your Finger On Device");
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            DriverInfo();
            SucessInfo(xmlhttp.responseText);
            document.getElementById('bioFinger').value = xmlhttp.responseText;
        } else if (xmlhttp.status == 404)
        {
            alert("Step Fail");
            failCall(xmlhttp.status)
        } else if (xmlhttp.status == 503)
        {
            alert("server Unavailable");
        }
    }
    xmlhttp.onerror = function ()
    {
        failCall(xmlhttp.status);
    }
    xmlhttp.onabort = function ()
    {
        alert("Aborted");
    }
    xmlhttp.open("CAPTURE", uri, true);
    xmlhttp.send(params);
}
function	SucessInfo(result)
{
    alert("Biometric Capture Successfully");
}

function discoverAvdm()
{
    $('#txtWadh').val('');
    $('#txtDeviceInfo').val('');
    $('#txtPidOptions').val('');
    $('#txtPidData').val('');
    var SuccessFlag = 0;
    var primaryUrl = "http://127.0.0.1:";
    var OldPort = true;
    url = "";
    $("#ddlAVDM").empty();
    for (var i = 11100; i <= 11120; i++)
    {
        if (primaryUrl == "https://127.0.0.1:" && OldPort == true)
        {
            i = "8005";
        }
        $("#lblStatus1").text("Discovering RD service on port : " + i.toString());
        var verb = "RDSERVICE";
        var err = "";
        SuccessFlag = 0;
        var res;
        $.support.cors = true;
        var httpStaus = false;
        var jsonstr = "";
        var data = new Object();
        var obj = new Object();
        $.ajax({

            type: "RDSERVICE",
            async: false,
            crossDomain: true,
            url: primaryUrl + i.toString(),
            contentType: "text/xml; charset=utf-8",
            processData: false,
            cache: false,
            crossDomain: true,
            success: function (data) {

                httpStaus = true;
                res = {httpStaus: httpStaus, data: data};
                finalUrl = primaryUrl + i.toString();
                var $doc = $.parseXML(data);
                var CmbData1 = $($doc).find('RDService').attr('status');
                var CmbData2 = $($doc).find('RDService').attr('info');
                if (RegExp('\\b' + 'Mantra' + '\\b').test(CmbData2) == true)
                {

                    $("#txtDeviceInfo").val(data);
                    if ($($doc).find('Interface').eq(0).attr('path') == "/rd/capture")
                    {
                        MethodCapture = $($doc).find('Interface').eq(0).attr('path');
                    }
                    if ($($doc).find('Interface').eq(1).attr('path') == "/rd/capture")
                    {
                        MethodCapture = $($doc).find('Interface').eq(1).attr('path');
                    }
                    if ($($doc).find('Interface').eq(0).attr('path') == "/rd/info")
                    {
                        MethodInfo = $($doc).find('Interface').eq(0).attr('path');
                    }
                    if ($($doc).find('Interface').eq(1).attr('path') == "/rd/info")
                    {
                        MethodInfo = $($doc).find('Interface').eq(1).attr('path');
                    }
                    $("#ddlAVDM").append('<option value=' + i.toString() + '>(' + CmbData1 + ')' + CmbData2 + '</option>')
                    SuccessFlag = 1;
                    alert("RDSERVICE Discover Successfully");
                    return;
                }
            },
            error: function (jqXHR, ajaxOptions, thrownError) {
                if (i == "8005" && OldPort == true)
                {
                    OldPort = false;
                    i = "11099";
                }
                $('#txtDeviceInfo').val("");
            },
        });
        if (SuccessFlag == 1)
        {
            break;
        }
    }
    if (SuccessFlag == 0)
    {
        alert("Connection failed Please try again.");
    }
    $("select#ddlAVDM").prop('selectedIndex', 0);
    CaptureAvdm();
    return res;
}

function CaptureAvdm()
{
    var XML = '<?xml version="1.0"?> <PidOptions ver="1.0"> <Opts fCount="1" fType="2" iCount="0" pCount="0" pgCount="2" format="0"   pidVer="2.0" timeout="10000" pTimeout="20000" posh="UNKNOWN" env="P" wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" /> <CustOpts><Param name="mantrakey" value="" /></CustOpts> </PidOptions>';
    var verb = "CAPTURE";
    var err = "";
    var res;
    $.support.cors = true;
    var httpStaus = false;
    var jsonstr = "";
    ;
    $.ajax(
            {

                type: "CAPTURE",
                async: false,
                crossDomain: true,
                url: finalUrl + MethodCapture,
                data: XML,
                contentType: "text/xml; charset=utf-8",
                processData: false,
                success: function (data) {
                    httpStaus = true;
                    res = {httpStaus: httpStaus, data: data};
                    $('#txtPidData').val(data);
                    $('#txtPidOptions').val(XML);
                    var $doc = $.parseXML(data);
                    var Message = $($doc).find('Resp').attr('errInfo');
                    abc([{name: 'dataBio', value: data}]);
                    alert(Message);
                },
                error: function (jqXHR, ajaxOptions, thrownError) {
                    alert(thrownError);
                    res = {httpStaus: httpStaus, err: getHttpError(jqXHR)};
                }
                ,
            });


}


///////// For Login Mantra ////////////////////
function discoverAvdm1()
{
    $('#txtWadh').val('');
    $('#txtDeviceInfo').val('');
    $('#txtPidOptions').val('');
    $('#txtPidData').val('');
    var SuccessFlag = 0;
    var primaryUrl = "http://127.0.0.1:";
    var OldPort = true;
    url = "";
    $("#ddlAVDM").empty();
    for (var i = 11100; i <= 11120; i++)
    {
        if (primaryUrl == "https://127.0.0.1:" && OldPort == true)
        {
            i = "8005";
        }
        $("#lblStatus1").text("Discovering RD service on port : " + i.toString());
        var verb = "RDSERVICE";
        var err = "";
        SuccessFlag = 0;
        var res;
        $.support.cors = true;
        var httpStaus = false;
        var jsonstr = "";
        var data = new Object();
        var obj = new Object();
        $.ajax({

            type: "RDSERVICE",
            async: false,
            crossDomain: true,
            url: primaryUrl + i.toString(),
            contentType: "text/xml; charset=utf-8",
            processData: false,
            cache: false,
            crossDomain: true,
            success: function (data) {

                httpStaus = true;
                res = {httpStaus: httpStaus, data: data};
                finalUrl = primaryUrl + i.toString();
                var $doc = $.parseXML(data);
                var CmbData1 = $($doc).find('RDService').attr('status');
                var CmbData2 = $($doc).find('RDService').attr('info');
                if (RegExp('\\b' + 'Mantra' + '\\b').test(CmbData2) == true)
                {

                    $("#txtDeviceInfo").val(data);
                    if ($($doc).find('Interface').eq(0).attr('path') == "/rd/capture")
                    {
                        MethodCapture = $($doc).find('Interface').eq(0).attr('path');
                    }
                    if ($($doc).find('Interface').eq(1).attr('path') == "/rd/capture")
                    {
                        MethodCapture = $($doc).find('Interface').eq(1).attr('path');
                    }
                    if ($($doc).find('Interface').eq(0).attr('path') == "/rd/info")
                    {
                        MethodInfo = $($doc).find('Interface').eq(0).attr('path');
                    }
                    if ($($doc).find('Interface').eq(1).attr('path') == "/rd/info")
                    {
                        MethodInfo = $($doc).find('Interface').eq(1).attr('path');
                    }
                    $("#ddlAVDM").append('<option value=' + i.toString() + '>(' + CmbData1 + ')' + CmbData2 + '</option>')
                    SuccessFlag = 1;
                    alert("RDSERVICE Discover Successfully");
                    return;
                }
            },
            error: function (jqXHR, ajaxOptions, thrownError) {
                if (i == "8005" && OldPort == true)
                {
                    OldPort = false;
                    i = "11099";
                }
                $('#txtDeviceInfo').val("");
            },
        });
        if (SuccessFlag == 1)
        {
            break;
        }
    }
    if (SuccessFlag == 0)
    {
        alert("Connection failed Please try again.");
    }
    $("select#ddlAVDM").prop('selectedIndex', 0);
    CaptureAvdm1();
    return res;
}

function CaptureAvdm1()
{
    var XML = '<?xml version="1.0"?> <PidOptions ver="1.0"> <Opts fCount="1" fType="2" iCount="0" pCount="0" pgCount="2" format="0"   pidVer="2.0" timeout="10000" pTimeout="20000" posh="UNKNOWN" env="P" wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" /> <CustOpts><Param name="mantrakey" value="" /></CustOpts> </PidOptions>';
    var verb = "CAPTURE";
    var err = "";
    var res;
    $.support.cors = true;
    var httpStaus = false;
    var jsonstr = "";
    ;
    $.ajax(
            {

                type: "CAPTURE",
                async: false,
                crossDomain: true,
                url: finalUrl + MethodCapture,
                data: XML,
                contentType: "text/xml; charset=utf-8",
                processData: false,
                success: function (data) {
                    httpStaus = true;
                    res = {httpStaus: httpStaus, data: data};
                    $('#txtPidData').val(data);
                    $('#txtPidOptions').val(XML);
                    var $doc = $.parseXML(data);
                    var Message = $($doc).find('Resp').attr('errInfo');
                    document.getElementById('bioFinger').value = data;
                    alert(Message);
                },
                error: function (jqXHR, ajaxOptions, thrownError) {
                    alert(thrownError);
                    res = {httpStaus: httpStaus, err: getHttpError(jqXHR)};
                }
                ,
            });
}
function DriverInfo( )
{
    var uri = "https://localhost:11100/rd/info";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            SucessInfo(xmlhttp.responseText);
            var info = xmlhttp.responseXML.childNodes[0].childNodes[0].childNodes;
            for (var i = 0; i < info.length; i++) {
                var name = info[i].attributes.name.nodeValue;
                if (name.localeCompare("srno") == 0) {
                    //  alert(info[i].attributes.name.nodeValue + ' = ' + info[i].attributes.value.nodeValue);
                    document.getElementById('deviceSrNo').value = info[i].attributes.value.nodeValue;
                    break;
                }
            }

        } else if (xmlhttp.status == 404)
        {
            failCall(xmlhttp.status)
        } else if (xmlhttp.status == 503)
        {
            failCall(xmlhttp.status)
        }
    }
    xmlhttp.onerror = function ()
    {
        failCall(xmlhttp.status);
    }
    xmlhttp.onabort = function ()
    {
        alert("Aborted");
    }
    xmlhttp.open("DEVICEINFO", uri, true);
    xmlhttp.send();
}
function failCall(status)
{

    /* 	
     If you reach here, user is probabaly not running the 
     service. Redirect the user to a page where he can download the
     executable and install it. 
     */
    alert("Check if RDSERVICE is running ");

}
