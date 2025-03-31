document.addEventListener("DOMContentLoaded", function () {
  const videosContainer = document.querySelector(".videos-container");
  const videos = [
    {
      title: "How to Build a YouTube Clone with HTML, CSS & JavaScript",
      channel: "Web Dev Simplified",
      views: "120K views",
      time: "3 days ago",
      duration: "10:30",
      thumbnail: "https://i.ytimg.com/vi/JJSoEo8JSnc/hqdefault.jpg",
    },
    {
      title: "Learn CSS Grid in 20 Minutes",
      channel: "Traversy Media",
      views: "450K views",
      time: "1 month ago",
      duration: "20:15",
      thumbnail: "https://i.ytimg.com/vi/9zBsdzdE4sM/hqdefault.jpg",
    },
    {
      title: "JavaScript Crash Course For Beginners",
      channel: "Programming with Mosh",
      views: "1.2M views",
      time: "5 months ago",
      duration: "1:35:45",
      thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    },
    {
      title: "Build a Netflix Clone with React",
      channel: "Clever Programmer",
      views: "320K views",
      time: "2 weeks ago",
      duration: "1:02:30",
      thumbnail: "https://i.ytimg.com/vi/P7t13SGytRk/hqdefault.jpg",
    },
    {
      title: "HTML Full Course - Build a Website Tutorial",
      channel: "freeCodeCamp.org",
      views: "2.1M views",
      time: "1 year ago",
      duration: "2:05:45",
      thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
    },
    {
      title: "Python Tutorial for Beginners - Full Course",
      channel: "Programming with Mosh",
      views: "3.5M views",
      time: "2 years ago",
      duration: "6:14:07",
      thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
    },
    {
      title: "React JS - React Tutorial for Beginners",
      channel: "Academind",
      views: "890K views",
      time: "8 months ago",
      duration: "2:25:30",
      thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg",
    },
    {
      title: "Node.js Tutorial for Beginners",
      channel: "Web Dev Simplified",
      views: "210K views",
      time: "3 weeks ago",
      duration: "45:20",
      thumbnail: "https://i.ytimg.com/vi/f2EqECiTBL8/hqdefault.jpg",
    },
  ];

  // Generate video cards
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.className = "video-card";

    videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <div class="channel-avatar-sm">${video.channel.charAt(0)}</div>
                <div class="video-details">
                    <h3>${video.title}</h3>
                    <p>${video.channel}</p>
                    <p>${video.views} • ${video.time}</p>
                </div>
            </div>
        `;

    videosContainer.appendChild(videoCard);
  });

  // Toggle sidebar on menu icon click
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");

  menuIcon.addEventListener("click", function () {
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  });

  // Handle category buttons
  const categoryBtns = document.querySelectorAll(".category-btn");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
