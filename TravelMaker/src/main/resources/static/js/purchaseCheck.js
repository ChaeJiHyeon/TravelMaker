/**
 * 
 */

var region = $('#region').val();
var people = $('#people').val();
var email = $('#email').val();
function requestPay() {
var IMP = window.IMP; // 생략 가능
IMP.init("imp84346376"); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-001",
        name: "랜덤 기차 여행 - " + region,
        amount: 600,
        buyer_email: email,
        buyer_name: "양수비",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181"
    }, function (rsp) { // callback
        if (rsp.success) {
            alert("성공");
            $('#content').load('/order/purchasedTicket');
        } else {
            alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
    });
  }
/*티켓 구매내역 미리띄울게 */
/*$('#btnTicket').on('click', function(){
            $('#content').load('/order/purchasedTicket');
})*/
$('#btnTicket').on('click', function(){
    $('#content').load('/order/purchasedTicket');
})