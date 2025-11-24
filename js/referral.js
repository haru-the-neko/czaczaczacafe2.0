document.addEventListener("DOMContentLoaded", function() {
  console.log("referral.js loaded");
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const patientName = document.getElementById("patient-name");
    const age = document.getElementById("patient-age");
    const sex = document.getElementById("patient-sex");
    const date = document.getElementById("referral-date");
    const facility = document.getElementById("receiving-facility");
    const reason = document.getElementById("reason-referral");
    const findings = document.getElementById("initial-findings");

    const required = [patientName, age, sex, date, facility, reason, findings];
    const missing = required.filter(i => !i || !i.value || i.value.trim()==="");

    if (missing.length) {
      alert("Please fill out all required fields.");
      return;
    }

    const id = "REF-" + Math.random().toString(36).substring(2,9).toUpperCase();
    const banner = document.createElement("div");
    banner.textContent = "Referral generated (" + id + ")";
    Object.assign(banner.style, {
      position: "fixed", top: "24px", right: "24px", background: "#0A6CFF", color: "#fff", padding: "12px 16px", borderRadius: "8px", zIndex: 9999
    });
    document.body.appendChild(banner);
    setTimeout(()=> banner.remove(), 2500);
    form.reset();
  });
});