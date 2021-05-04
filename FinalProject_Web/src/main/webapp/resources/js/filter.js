function empty(){
   $("#detailInfoTbl").empty();
}
function st(){
   var w = $("#detailInfoTbl").offset().top;
   $('div').scrollTop(0);
}

function tdtd(dutyno, dutyaddr, dutyeryn, dutyname, dutytel1, wgs84lat, wgs84lon, dutytime1s, dutytime1c, dutytime2s, 
			dutytime2c, dutytime3s, dutytime3c, dutytime4s, dutytime4c, dutytime5s, dutytime5c, dutytime6s, dutytime6c, dutytime7s, 
			dutytime7c, dutytime8s, dutytime8c){
   // alert(dutyno);
   // alert(dutyname);
   // alert(wgs84lat);
   $("#detailInfoTbl").empty();
   var button = $("<button></button>").append("X").attr("onclick","empty()");
   var tdb = $("<td></td>").append(button).attr("id", "buttonTd").attr("style", "width: 20px; padding-top: 0px; margin-top: 0px; top: 0px; right: 0px; font-weight: bold; font-size: 15pt;");
   var td1 = $("<td></td>").append(dutyname).attr("id", "dutynameTd").attr("style", "font-size: 15pt; width: 330px;");
   var td2 = $("<td></td>").append(dutyaddr).attr("colspan", "2");
   var td3 = $("<td></td>").append(dutytel1).attr("colspan", "2");
   var td4 = $("<td></td>").append(dutyeryn).attr("colspan", "2");
   var b1 = $("<br>");
   var b2 = $("<br>");
   var b3 = $("<br>");
   var b4 = $("<br>");
   var b5 = $("<br>");
   var b6 = $("<br>");
   var b7 = $("<br>");
   var td5 = $("<td></td>").append("월요일", " ", dutytime1s, "~", dutytime1c, b1, "화요일", " ", dutytime2s, "~", dutytime2c, b2, "수요일", " ", dutytime3s, "~", dutytime3c, b3, "목요일", " ", 
		   dutytime4s, "~", dutytime4c, b4, "금요일", " ", dutytime5s, "~", dutytime5c, b5, "토요일", " ", dutytime6s, "~", dutytime6c, b6, "일요일", " ", 
		   dutytime7s, "~", dutytime7c, b7, "공휴일", " ", dutytime8s, "~", dutytime8c).attr("colspan", "2").attr("style", "border-bottom: none;");
   var tr1 = $("<tr></tr>").append(td1, tdb);
   var tr2 = $("<tr></tr>").append(td2);
   var tr3 = $("<tr></tr>").append(td3);
   var tr4 = $("<tr></tr>").append(td4);
   var tr5 = $("<tr></tr>").append(td5);
   $("#detailInfoTbl").append(tr1, tr2, tr3, tr4, tr5);
   st();
    var imageSrc = 'resources/img/hospital.png', // 마커이미지의 주소입니다    
     imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기입니다
     imageOption = {offset: new kakao.maps.Point(33, 72)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

 // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
 var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
 var markerPosition = new kakao.maps.LatLng(wgs84lon, wgs84lat); // 마커가 표시될 위치입니다

 // 이동할 위도 경도 위치를 생성합니다 
 var moveLatLon = new kakao.maps.LatLng(wgs84lon, wgs84lat);

 // 지도 중심을 이동 시킵니다
 map.setCenter(moveLatLon);

function panTo() {
 // 이동할 위도 경도 위치를 생성합니다 
 var moveLatLon = new kakao.maps.LatLng(wgs84lon, wgs84lat);

 // 지도 중심을 부드럽게 이동시킵니다
 // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
 map.panTo(moveLatLon);            
}        

 var c = new kakao.maps.LatLng(wgs84lon, wgs84lat);
 var marker = new kakao.maps.Marker({
       map : map,
       position : c,
       image: markerImage,
       title : "현위치",
       clickable: true
    });
    marker.setMap(map);
    var iwContent1 = '<div style="padding:5px;">'+ dutyname + '</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var iwContent2 = '<div style="padding:5px; width: 300px; height: 300px; font-size: 11pt;">'+ dutyaddr + '<hr>' + dutytel1 + '<hr>' + dutyeryn  + '<hr>' + '월요일' + ' ' + dutytime1s + '~' + dutytime1c + '<br>' + '화요일' + ' ' + dutytime2s + '~' + dutytime2c + '<br>' + '수요일' + ' '+ dutytime3s + '~' + dutytime3c + '<br>' + '목요일' + ' '+ dutytime4s + '~' + dutytime4c + '<br>' + '금요일' + ' '+ dutytime5s + '~' + dutytime5c + '<br>' + '토요일' + ' '+ dutytime6s + '~' + dutytime6c + '<br>' + '일요일' + ' '+ dutytime7s + '~' + dutytime7c + '<br>' + '공휴일' + ' '+ dutytime8s + '~' + dutytime8c + '</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    var infowindow = new kakao.maps.InfoWindow({
       content : iwContent1               
    });

    var infowindow2 = new kakao.maps.InfoWindow({
       content : iwContent2,  
        removable : iwRemoveable
    });

    kakao.maps.event.addListener(marker, 'mouseover', function() {
         // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
           infowindow.open(map, marker);
       });

       // 마커에 마우스아웃 이벤트를 등록합니다
       kakao.maps.event.addListener(marker, 'mouseout', function() {
           // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
           infowindow.close();
       });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow2.open(map, marker); 
          marker.setMap(map);
          // location.href = "/detailInfo.go";
    }); 

}

function getList() { 
   var loc = $("#location").val();
   var yoil = $("#yoil").val();
   var hour = $("#hour").val();
   var minute = $("#minute").val();
   var dutyeryn = $("#dutyeryn").val();
   var searchInput = $("#searchInput").val(); 

   $.getJSON("hospital.get.json?location=" + loc + "&yoil=" + yoil + "&hour=" + hour + "&minute=" + minute + "&dutyeryn=" + dutyeryn + "&searchInput=" + searchInput, function(we){
      $("#listTbl").empty();
      $.each(we.hospitalInfo, function(i, h) {
         var dn = h.dutyno;
         var t = h.dutyname;
         var b = $("<br>");
         var t2 = h.dutytel1;
         var addr = h.dutyaddr;
         var eryn = h.dutyeryn;
         var s1 = h.dutytime1s;
         var c1 = h.dutytime1c;
         var s2 = h.dutytime2s;
         var c2 = h.dutytime2c;
         var s3 = h.dutytime3s;
         var c3 = h.dutytime3c;
         var s4 = h.dutytime4s;
         var c4 = h.dutytime4c;
         var s5 = h.dutytime5s;
         var c5 = h.dutytime5c;
         var s6 = h.dutytime6s;
         var c6 = h.dutytime6c;
         var s7 = h.dutytime7s;
         var c7 = h.dutytime7c;
         var s8 = h.dutytime8s;
         var c8 = h.dutytime8c;
         var lon2 = h.wgs84lon * 1;
         var lat2 = h.wgs84lat * 1;
         var td1 = $("<td></td>").append(t, b, t2).attr("onclick","tdtd(" + dn + ", '" + addr + "', " + eryn + ", '" + t + "','" + t2 + "'," + lat2 + "," 
        		 	+ lon2 + "," + s1 + ","+ c1 + "," + s2 + ","+ c2 + "," + s3 + ","+ c3 + "," + s4 + ","+ c4 + "," + s5 + ","+ c5 + "," + s6 + ","+ c6 + 
        		 	"," + s7 + ","+ c7 + "," + s8 + ","+ c8 +")");
         var tr = $("<tr></tr>").append(td1);
         $("#listTbl").append(tr);

           var imageSrc = 'resources/img/hospital.png', // 마커이미지의 주소입니다    
             imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기입니다
             imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

         // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
         var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
         var markerPosition = new kakao.maps.LatLng(lon2, lat2); // 마커가 표시될 위치입니다

         

         // 이동할 위도 경도 위치를 생성합니다 
         var moveLatLon = new kakao.maps.LatLng(lon2, lat2);

         // 지도 중심을 이동 시킵니다
         map.setCenter(moveLatLon);

     function panTo() {
         // 이동할 위도 경도 위치를 생성합니다 
         var moveLatLon = new kakao.maps.LatLng(lon2, lat2);

         // 지도 중심을 부드럽게 이동시킵니다
         // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
         map.panTo(moveLatLon);            
     }        

         var c = new kakao.maps.LatLng(lon2, lat2);
         var marker = new kakao.maps.Marker({
               map : map,
               position : c,
               image: markerImage,
               title : "현위치",
               clickable: true
            });
            marker.setMap(map);
            var iwContent1 = '<div style="padding:5px;">'+ t + '</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var iwContent2 = '<div style="padding:5px; width: 300px; height: 300px; font-size: 11pt;">'+ addr + '<hr>' + t2 + '<hr>' + eryn  + '<hr>' + '월요일' + ' ' + s1 + '~' + c1 + '<br>' + '화요일' + ' '+ s2 + '~' + c2 + '<br>' + '수요일' + ' ' + s3 + '~' + c3 + '<br>' + '목요일' + ' ' + s4 + '~' + c4 + '<br>' + '금요일' + ' ' + s5 + '~' + c5 + '<br>' + '토요일' + ' ' + s6 + '~' + c6 + '<br>' + '일요일' + ' ' + s7 + '~' + c7 + '<br>' + '공휴일' + ' ' + s8 + '~' + c8 +'</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
            var infowindow = new kakao.maps.InfoWindow({
               content : iwContent1               
            });

            var infowindow2 = new kakao.maps.InfoWindow({
               content : iwContent2,  
                removable : iwRemoveable
            });

            kakao.maps.event.addListener(marker, 'mouseover', function() {
                 // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                   infowindow.open(map, marker);
               });
 
               // 마커에 마우스아웃 이벤트를 등록합니다
               kakao.maps.event.addListener(marker, 'mouseout', function() {
                   // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                   infowindow.close();
               });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                  // 마커 위에 인포윈도우를 표시합니다
                  infowindow2.open(map, marker); 
                  // location.href = "/detailInfo.go";
            }); 
      });
      //alert("dfsfsf");
   });
}

function ec(){
   $("#location").change(function(){
      getList();
   });
   $("#yoil").change(function(){
      getList();
   });
   $("#hour").change(function(){
      getList();
   });
   $("#minute").change(function(){
      getList();
   });
   $("#dutyeryn").change(function(){
      getList();
   });
   $("#searchInput").keyup(function(e){
      if(e.keyCode == 13){
         getList();
      }
      //getList();
   });
}
 
$(function(){
   ec();
});