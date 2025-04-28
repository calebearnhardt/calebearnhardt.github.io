// schedule.js
// 1. Dynamically generates a May schedule (Monday-Friday) for Mocksville Barbershop
// 2. Auto-updates footer year
// 3. Shows a confirmation message when the contact form is submitted

$(document).ready(function() {
    // ---- 1. Dynamic May Schedule ----
    const scheduleDiv = $("#schedule");
    const mayDays = 31;
    const times = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
  
    // Function to get weekday name from date
    function getWeekday(year, month, day) {
      const date = new Date(year, month, day);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[date.getDay()];
    }
  
    let year = 2025;
    let month = 4; // May is month 4 (JavaScript counts months starting at 0)
  
    // Create table for schedule
    let table = $("<table></table>").addClass("schedule-table");
    table.append("<thead><tr><th>Date</th><th>Day</th><th>Available Times</th></tr></thead>");
    let tbody = $("<tbody></tbody>");
  
    for (let day = 1; day <= mayDays; day++) {
      const weekday = getWeekday(year, month, day);
  
      if (weekday !== "Saturday" && weekday !== "Sunday") {
        const dateStr = `May ${day}, 2025`;
  
        let timeList = "<ul>";
        times.forEach(function(time) {
          timeList += `<li>${time}</li>`;
        });
        timeList += "</ul>";
  
        const row = $("<tr></tr>");
        row.append(`<td>${dateStr}</td>`);
        row.append(`<td>${weekday}</td>`);
        row.append(`<td>${timeList}</td>`);
        tbody.append(row);
      }
    }
  
    table.append(tbody);
    scheduleDiv.append("<h3>May 2025 Schedule</h3>");
    scheduleDiv.append(table);
  
    // ---- 2. Auto-Update Footer Year ----
    const currentYear = new Date().getFullYear();
    $("footer p:last").html(function(_, oldHtml) {
      return oldHtml.replace(/©\d+/, `©${currentYear}`);
    });
  
    // ---- 3. Form Submit Confirmation ----
    $("form").on("submit", function(event) {
      event.preventDefault(); // Prevent actual submission for now
      alert("Thank you for contacting Mocksville Barbershop! We will get back to you soon.");
      this.reset(); // Optional: Clears the form fields after submission
    });
  });
  