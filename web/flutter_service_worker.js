'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "635b824bddd832d9d834b4f6f3aaa3a7",
"assets/AssetManifest.json": "ddae4ebeb7d2fd868e83c9bcb75192fa",
"assets/assets/font/font_pretendard_bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/font/font_pretendard_extra_bold.otf": "83090e76856550278a1694bdf48a2db1",
"assets/assets/font/font_pretendard_medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/font/font_pretendard_regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/font/font_pretendard_semi_bold.otf": "d9d912f2630bae445757f4769271c35c",
"assets/assets/res/drawable/ic_arrow_left_20.png": "6db38f2e125df280363f0ea66e9de656",
"assets/assets/res/drawable/ic_camera_42.png": "0dbae31c29db8caa8e2d58ff3178e905",
"assets/assets/res/drawable/ic_checklist_24.png": "03562e88e4ba20fa2564637ef0401d23",
"assets/assets/res/drawable/ic_check_disable_14.png": "84489344c972772ecf4f6a7d05acb2fa",
"assets/assets/res/drawable/ic_check_disable_16.png": "9f149f491f626e648c704235968364c8",
"assets/assets/res/drawable/ic_check_enable_14.png": "691d1d3787d4c2b29f6c17ec2f0b0ab7",
"assets/assets/res/drawable/ic_check_enable_16.png": "c612ac8d7f0ef78cfc1329261673a2db",
"assets/assets/res/drawable/ic_close_20.png": "1f863e3ce7cd54f8c95f009f1144138a",
"assets/assets/res/drawable/ic_cursor_right_18.png": "71842f871df98f40086ffc9e74672eb0",
"assets/assets/res/drawable/ic_cursor_right_20.png": "177a632d74a76b50ead960dd575a56c2",
"assets/assets/res/drawable/ic_gallery_42.png": "773997717769a8fc10b32f24ed1836d2",
"assets/assets/res/drawable/ic_kakao_18.png": "fd6ee1c5a5d9f94a23dc2597927a04f1",
"assets/assets/res/drawable/ic_latest_24.png": "ac00d0924d18447dd513bdf715129f8d",
"assets/assets/res/drawable/ic_location_42.png": "b4acbbdb884d56708a20803e89aad5c2",
"assets/assets/res/drawable/ic_logo_email_24.png": "e587c3d319eff0532ceacca113440da1",
"assets/assets/res/drawable/ic_logo_google_24.png": "e522ecdff7999e326dc102f5fea90591",
"assets/assets/res/drawable/ic_logo_kakao_24.png": "49481f4747bc0d30c9030ddeec4d7fa8",
"assets/assets/res/drawable/ic_logo_naver_24.png": "4d8a44ecf9e866a7fc0598163c1a5db4",
"assets/assets/res/drawable/ic_pencil_18.png": "46e5813a79ee162bcf9a7187bfa84bc3",
"assets/assets/res/drawable/ic_save_24.png": "63042c08f3a3953e96fbfc8f5fa0f135",
"assets/assets/res/drawable/ic_splash_logo.png": "2f57263f4862dcfeff3cb3f2f5b066cb",
"assets/assets/res/drawable/ic_tab_feed_22.png": "639d4ce56db478c50ef4065483837acf",
"assets/assets/res/drawable/ic_tab_mypage_22.png": "c7487d7a4283e2cb30c614c66554f7f7",
"assets/assets/res/drawable/ic_tab_position_22.png": "8aa28601fb87c68ccf991c4637536e73",
"assets/assets/res/drawable/ic_tab_send_22.png": "8c3a0bf46406955dcee92d45b31a61cd",
"assets/assets/res/drawable/ic_user_28.png": "9029fa34f01385a2a24ac2f3ad658eb3",
"assets/assets/res/drawable/ic_user_56.png": "497674c23f39617d6cf07e71e5f26f4c",
"assets/assets/res/drawable/ic_x_circle_16.png": "9cc8248fb0e0490a3114d2925e6c2f84",
"assets/FontManifest.json": "68eaf981cad98abc5faa09112fc8929a",
"assets/fonts/MaterialIcons-Regular.otf": "8ed8362dff0f14b5427922950f9714e2",
"assets/NOTICES": "af05230da0dbd94ddc863b795e21f686",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c7b23fb6e0afe84426843e047376b32",
"/": "5c7b23fb6e0afe84426843e047376b32",
"main.dart.js": "d7255ed8784b40fa2e14768f7dcfab09",
"manifest.json": "e4cf67cfb0e2d8d14baef93208478ad5",
"version.json": "601314cef08a742592ced348b297d21f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
