
     function logout() {
    window.location.href = "index.html";
  }

  
    const progress = document.getElementById("progress");
    const timeText = document.getElementById("time");

    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const quickBtns = document.querySelectorAll("[data-min]");

    const radius = 100;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    let totalTime = 40 * 60; 
    let timeLeft = totalTime;
    let timerId = null;
    let isRunning = false;

    function updateCircle() {
      const offset = circumference - (timeLeft / totalTime) * circumference;
      progress.style.strokeDashoffset = offset;
    }

    function updateTime() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timeText.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
    }

    function setMinutes(min) {
      if (isRunning) return;
      totalTime = min * 60;
      timeLeft = totalTime;
      updateTime();
      updateCircle();
    }

    function startTimer() {
      if (isRunning) return;
      isRunning = true;

      startBtn.disabled = true;
      pauseBtn.disabled = false;

      timerId = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timerId);
          timerId = null;
          isRunning = false;

          startBtn.disabled = false;
          pauseBtn.disabled = true;

          alert("Session complete ✅");
          return;
        }

        timeLeft--;
        updateTime();
        updateCircle();
      }, 1000);
    }

    function pauseTimer() {
      if (!isRunning) return;
      isRunning = false;

      clearInterval(timerId);
      timerId = null;

      startBtn.disabled = false;
      pauseBtn.disabled = true;
    }

    function resetTimer() {
      pauseTimer();
      timeLeft = totalTime;
      updateTime();
      updateCircle();
    }

    
    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);

    quickBtns.forEach(btn => {
      btn.addEventListener("click", () => setMinutes(Number(btn.dataset.min)));
    });

    
    updateTime();
    updateCircle();
  