self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

/* LẮNG NGHE MESSAGE TỪ WEBSITE */
self.addEventListener("message", e => {
  if(e.data === "SHOW_NOTIFICATION"){
    self.registration.showNotification("⏰ Thông báo hệ thống", {
      body: "Sự kiện đã đến thời điểm được thiết lập.",
      icon: "/icon.png",
      badge: "/icon.png"
    });
  }
});
