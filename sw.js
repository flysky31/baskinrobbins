
//개발자도구 > 애플리케이션 > 캐시스토리지에 저장될 이름
var CHCHE_NAME = 'pwa-offline-v1';  

//캐싱할 웹자원(이미지,css) 목록을 배열로
//var filesToCache = ["/","/img/login_logo.png"];

var filesToCache = [
    "/",
    "/img/login_logo.png",
    "css/main.css"
];


//서비스 워커 설치 (웹자원 캐싱)
self.addEventListener("install",function(event){
    event.waitUntill(
        caches.open(CHCHE_NAME)  //CHCHE_NAME변수이름으로 캐시 스토리지에 캐시를 생성
        //caches - 캐시스토리지에 접근할 수 있는 예약어
        .then(function(cache){   //캐싱이 성공했을 때(위에 결과물 캐시파일)
            return cache.addAll(filesToCache)   //pwa파일 웹자원추가
        })
        .catch(function(error){
            return console.log(error);
        })
    )
})

//서비스워커 설치 후 캐시된 자원에 대한 네트워크 요청이 있을 때 캐시로 돌려줌
self.addEventListener('fetch',function(event){
    console.log("서비스워커 페치");
    event.respondWith(    //fetch과에 대한 응답을 알려주는 api
        caches.match(event.request) // caches.match() = 네크워크에 요청에 해당하는 캐싱을 반환
        .then(function(response){
            return response || fetch(event.request); //캐시에 없을 때는 fetch api 네크워크로 가서 가져옴
        })
        .catch(function(error){
            return console.log(error)
        })
    )
})


//서비스워커 활성화및 업데이트
self.addEventListener("activate",function(event){
    var newCacheList = '';

    event.waitUntill(       //내부동작이 끝날때까지 기다려줌
        caches.keys(event)      //객체안의 모든키들, 스토리지의 모든 목록을 확인
        .then(function(cacheList){  //위의 목록을 가져옴
            return Promise.all( //여러 비동기 작업을 동시에 처리하여 결과를 얻고자 할때
            cacheList.map(function(cacheName){
            //새로운 서비스워커에서 사용할 캐시 이외의 것들은 모두 삭제
            if(newCacheList.indexOf(cacheName) === -1){
                return caches.delete(cacheName)
            }
            //문자열 indexOf("찾을 문자") - 같은게 몇번째 인지 알아옴
            //새로운 newCacheList의 아이템이 기존 캐쉬에 없을 경우
            })
            )
        })
        .catch(function(error){
            return console.log(error)
        })
    )
})