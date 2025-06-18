// content.js

(function replaceBannerWhenReady() {
    // 1. Try to find the bannerContainer
    const banner = document.querySelector(".bannerContainer");
    if (!banner) {
        // If not yet on the page, wait 100 ms and try again
        setTimeout(replaceBannerWhenReady, 100);
        return;
    }

    // 2. Once we have it, clear out anything inside (including the <img>):
    banner.innerHTML = "";
    banner.style.backgroundImage = "none"; // remove any leftover background

    // 3. Insert our new heading + paragraph
    banner.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="cit-banner-text">
      <h1>Cebu Institute of Technology</h1>
      
    </div>
  `
    );
    // 4. We’re done—no further retries needed

    //main

    const target = document.querySelector("table");
    if (target) {
        target.outerHTML = `<div class="ks-nav-container">
  <button class="ks-nav-item" onclick="trackActivityLogs('sections.php?mainID=102&menuDesc=Section Offering', 'Section Offering', '24-1579-328', '0', 'registrar', '')">Section Offering</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('profile.php?mainID=103&menuDesc=Profile', 'Profile', '24-1579-328', '0', 'registrar', '')">Profile</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('stud.regs.new.php?mainID=104&menuDesc=Registration', 'Registration', '24-1579-328', '0', 'registrar', '')">Registration</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('grades.php?mainID=106&menuDesc=Grades', 'Grades', '24-1579-328', '0', 'registrar', '')">Grades</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('accounts.php?mainID=107&menuDesc=Account', 'Account', '24-1579-328', '0', 'registrar', '')">Account</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('faculty.eval.php?mainID=1011&menuDesc=Faculty Evaluation', 'Faculty Evaluation', '24-1579-328', '0', 'registrar', '')">Faculty Evaluation</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('stud.pwd.php?mainID=1090&menuDesc=Password', 'Password', '24-1579-328', '0', 'registrar', '')">Password</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('schedule.php?mainID=1093&menuDesc=Schedule', 'Schedule', '24-1579-328', '0', 'registrar', '')">Schedule</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('stud.curr.eval.php?mainID=1096&menuDesc=Curriculum/Evaluation', 'Curriculum/Evaluation', '24-1579-328', '0', 'registrar', '')">Curriculum/Evaluation</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('StudAnnouncement.php?mainID=1503&menuDesc=Announcement', 'Announcement', '24-1579-328', '0', 'registrar', '')">Announcement</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('stud.regs.new.basic.php?mainID=1504&menuDesc=BasicEd Registration', 'BasicEd Registration', '24-1579-328', '0', 'registrar', '')">BasicEd Registration</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('studWelcomeMessage.php?mainID=1506&menuDesc=Welcome Message', 'Welcome Message', '24-1579-328', '0', 'registrar', '')">Welcome Message</button>
  <button class="ks-nav-item" onclick="trackActivityLogs('handbook.php?mainID=1095&menuDesc=Student HandBook', 'Student HandBook', '24-1579-328', '0', 'registrar', '')">Student HandBook</button>
</div>
`;
        const style = document.createElement("style");
        style.textContent = `.ks-nav-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.ks-nav-item {
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.ks-nav-item:hover {
  background-color: #e0f0ff;
  border-color: #88b6e0;
  color: #0056a7;
}

.ks-nav-item.active {
  background-color: #007acc;
  color: #fff;
  border-color: #007acc;
}
`;
        document.head.appendChild(style);
    }
})();
