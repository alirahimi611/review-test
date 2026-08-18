const container = document.querySelector(".container");
container.addEventListener("mousemove", (e) => {
  // گرفتن مختصات موس نسبت به viewport
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // گرفتن مختصات گوشه بالای سمت چپ container نسبت به viewport
  const containerRect = container.getBoundingClientRect();
  const containerLeft = containerRect.left;
  const containerTop = containerRect.top;

  // محاسبه مختصات موس نسبت به داخل container
  const x = mouseX - containerLeft;
  const y = mouseY - containerTop;

  // تنظیم پراپرتی‌های CSS --x و --y
  container.style.setProperty("--x", x + "px");
  container.style.setProperty("--y", y + "px");
});


const observer = new IntersectionObserver((entries)=>{
  
  if(entries[0].isIntersecting){
    entries[0].target.classList.toggle("show")
    // observer.unobserve(document.querySelector(".section2"))
  }
},{
  threshold:0.5
})


observer.observe(document.querySelector(".section2"))